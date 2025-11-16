import NavBar from '../components/NavBar.jsx';
import FramerPreview from '../components/FramerPreview.jsx';

export default function ProjektePortfolio() {
    return (
        <div>
            <NavBar />
            <h1>Portfolio</h1>
            <p>Hier sind einige unserer Arbeiten und Designs, die mit Figma und Framer erstellt wurden.</p>
            <FramerPreview />
        </div>
    );
}