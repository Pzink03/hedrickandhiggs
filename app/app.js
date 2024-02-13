
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

mongoose.connect('mongodb://root:example@localhost:27017/?authSource=admin')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
