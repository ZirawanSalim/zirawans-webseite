
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Projekte from './Pages/Projekte.jsx';
import SigninForm from './Übungen/signinForm.jsx';
import Footer from './components/Footer.jsx';
import Context from './Pages/Contexts.jsx';
import ThemeProvider from './contexts/ThemeProvider.jsx';
import GitHubPage from './Pages/GitHubPage.jsx';

export default function App() {
  return (
    <>
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projekte" element={<Projekte />} />
        <Route path="/SigninForm" element={<SigninForm />} />
      <Route path='/Contexts' element={<Context/>} /> 
       <Route path="/github" element={<GitHubPage />} /> 
    
      </Routes>
      <Footer />  
    </ThemeProvider>
      
    </>

  );
}