
import NavBar from '../components/NavBar.jsx';
import { Link } from 'react-router-dom';
import MeinProjekte from '../components/MeinProjekte.jsx';  

export default function ProjektePage() {
    return (
        <div>
        <NavBar />  
     <h3>Projekte Page</h3>
         <Link to="/">home</Link>
         <MeinProjekte />

        </div>
    )
}