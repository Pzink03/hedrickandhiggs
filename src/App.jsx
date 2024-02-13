

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./_root/pages/Home";
import { RootLayout } from './_root/RootLayout';
import { Projects } from './_root/pages/Projects';
import { About } from './_root/pages/About';
import { Contact } from './_root/pages/Contact';

export function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
