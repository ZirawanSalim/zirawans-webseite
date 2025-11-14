
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Projekte from './Pages/Projekte.jsx';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Projekte" element={<Projekte />} />
     
    </Routes>
  );
}