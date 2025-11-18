
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Projekte from './Pages/Projekte.jsx';
import SigninForm from './components/signinForm.jsx';
import Footer from './components/Footer.jsx';


export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projekte" element={<Projekte />} />
        <Route path="/SigninForm" element={<SigninForm />} />

      </Routes>
      <Footer />  
    </>

  );
}