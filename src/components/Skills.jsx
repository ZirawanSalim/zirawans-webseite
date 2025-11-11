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
               
        </section>
        )
}
