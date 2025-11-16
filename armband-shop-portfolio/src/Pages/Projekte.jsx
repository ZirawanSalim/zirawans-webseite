import NavBar from '../components/NavBar.jsx';
import { Link } from 'react-router-dom';
import ProjekteArmband from './ProjekteArmband.jsx';
import ProjektePortfolio from './ProjektePortfolio.jsx';

export default function ProjektePage() {
    return (
        <div>
            <NavBar />
            <h1>Unsere Projekte</h1>
            <div>
                <h2>Armband Projekte</h2>
                <Link to="/projekte-armband">
                    <ProjekteArmband />
                </Link>
            </div>
            <div>
                <h2>Portfolio Projekte</h2>
                <Link to="/projekte-portfolio">
                    <ProjektePortfolio />
                </Link>
            </div>
        </div>
    );
}