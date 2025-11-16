import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you have a CSS file for styling

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projekte">Projekte</Link>
                </li>
                <li>
                    <Link to="/projekte-armband">Armband Projekte</Link>
                </li>
                <li>
                    <Link to="/projekte-portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </nav>
    );
}