import MeinDaten from '../data/MeinDaten.json' with { type: 'json' };

export default function MeinProjekte() {
    return (
        <div className='m-4 p-4 '>
            <h2 className="text-3xl font-bold text-blue-400 mb-4 ml-40 ">Meine Projekte</h2>

            <ul>
                {MeinDaten.projekte.map((projekt, index) => {
                    return <li key={index} className="mb-2 text-lg ml-40 mr-36">
                        <a href={projekt.link} className="text-white hover:underline " target="_blank" rel="noopener noreferrer">
                            {projekt.name}
                        </a>
                        <div className="mt-1 text-xl font-semibold mb-2">
                        {projekt.titel} 
                        </div>
                         {projekt.beschreibung }
                        
                    </li>
                })}
            </ul>
        </div>
    );
}