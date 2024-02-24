
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import Project from './models/Projects.js'
import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        const suffix = Date.now();
        cb(null, file.fieldname + '-' + suffix + '.' + file.originalname.split('.').pop())
    }
})

const upload = multer({ storage: storage})

mongoose.connect('mongodb://root:example@localhost:27017/?authSource=admin')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'))
}
)

app.post('/submit', upload.single('photo'), async (req, res) => {
    try {
        const { title, description } = req.body;
        const photoUrl = `/uploads/${req.file.filename}`;

        const newProject = new Project({
            title,
            description,
            imageUrl: photoUrl,
        });

        await newProject.save();
        res.send('Project submitted');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
      }
    });

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects)
    } catch (err) {
        res.status(500).send(err);
    }
})

app.delete('/projects/delete/:id', async (req,res) => {
    try{
        const { id } = req.params;
        const result = await Project.findById(id)

        if (result) {
            await fs.unlink(path.join(__dirname, result.imageUrl))
            await Project.findByIdAndDelete(id)
            res.json({ message: "Successfully deleted project", id: result._id})
        } else {
            res.status(404).json({ message: "Project not found"})
        }
    } catch (error) {
        console.error("Delete Project Error", error);
        res.status(500).json({ message: "Error Deleting Project"})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
