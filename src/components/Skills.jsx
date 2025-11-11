import Icon from "./Icon.jsx";

export default function Skills() {
    return (
        <section id="skills" className="p-6 ">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-400 mb-4 ">Skills</h2>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Web Produktdesign</h2>
            <p className="mb-4">Im Laufe meiner Ausbildung habe ich umfassende Fähigkeiten in Figma, FigJam und Cursor entwickelt – von der ersten Idee bis hin zum interaktiven Prototypen.
                Ich nutze diese Tools, um strukturierte, nutzerzentrierte Designprozesse effizient umzusetzen und digitale Produkte durchdacht zu gestalten.</p>
            <h3 className="text-xl font-semibold mb-2">Zu meinen Schwerpunkten gehören:</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Entwicklung von Design-Systemen, um konsistente Interfaces zu gewährleisten</li>
                <li>Konkurrenzanalysen, um Marktpositionen und Gestaltungstrends zu erkennen</li>
                <li>User Flows zur Visualisierung von Nutzungspfaden</li>
                <li>Site Maps zur strukturellen Planung komplexer Websites oder Webapps</li>
                <li>Erstellung von Low-, Mid- und High-Fidelity-Wireframes</li>
                <li>Erstellung interaktiver Prototypen zur realistischen Darstellung von Nutzererlebnissen</li>
            </ul>
            <h3 className="text-xl font-semibold mb-6">Tools & Software:</h3>
            <div className="flex flex-wrap gap-4 text-5xl text-blue-500 ">
                <i className="devicon-figma-plain colored"></i>
                <Icon />
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Web Grundlagen</h2>
            <p className="mb-4">Im Modul Web Grundlagen habe ich gelernt, Webseiten mit HTML, CSS und JavaScript von Grund auf zu entwickeln.
                Dabei habe ich Bootstrap eingesetzt, um Layouts effizient umzusetzen,
                und den Editor Cursor verwendet, um produktiv zu programmieren.</p>
            <h3 className="text-xl font-semibold mb-2">Schwerpunkte:</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Strukturierung mit HTML5</li>
                <li>Styling mit CSS3 und Bootstrap</li>
                <li>Interaktive Logik mit JavaScript</li>
                <li>Praxisorientierte Umsetzung mit Cursor</li>
            </ul>
            <h3 className="text-xl font-semibold mb-6">Technologien & Sprachen:</h3>
            <div className="flex flex-wrap gap-4 text-5xl text-blue-500 ">
                <i className="devicon-html5-plain colored"></i>
                <i className="devicon-css3-plain colored"></i>
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-bootstrap-plain colored"></i>
                <i className="devicon-cursor-plain colored"></i>
                <i className="devicon-github-original"></i>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Web Frontend-Entwicklung</h2>
            <p className="mb-4">Im Modul Web Frontend habe ich mit modernen Frameworks wie React und Tailwind CSS gearbeitet.
                Ich nutze VS Code als Entwicklungsumgebung und habe gelernt, komponentenbasierte Benutzeroberflächen zu erstellen, die sowohl funktional als auch ästhetisch sind.</p>
            <h3 className="text-xl font-semibold mb-2">Schwerpunkte:</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Entwicklung dynamischer Oberflächen mit React</li>
                <li>Gestaltung responsiver Layouts mit Tailwind CSS</li>
                <li>Komponentenstruktur und Props-Management</li>
                <li>Versionskontrolle mit Git und GitHub</li>
                <li>Arbeiten mit VS Code</li>
            </ul>
            <h3 className="text-xl font-semibold mb-6">Technologien & Tools:</h3>
            <div className="flex flex-wrap gap-4 text-5xl text-blue-500 ">
                <i className="devicon-react-original colored"></i>
                <i className="devicon-tailwindcss-plain colored"></i>
                <i className="devicon-vscode-plain colored"></i>
                <i className="devicon-git-plain colored"></i>
                <i className="devicon-github-original"></i>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Weitere Kenntnisse</h2>
            <ul className="list-disc list-inside mb-6">
                <li>Versionskontrolle mit Git & GitHub</li>
                <li>Projekt-Hosting & Deployment über Vercel und GitHub Pages</li>
                <li>Zusammenarbeit mit KI-Tools wie Cursor AI und Copilot</li>
                </ul>
        


        </section >
    )
}
