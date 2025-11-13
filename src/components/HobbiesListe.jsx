import MeinDaten from '../data/MeinDaten.json' with { type: 'json' } 
  import { Link } from 'react-router-dom'
    export default function HobbiesListe() { 
        return (
            <div className='m-4 p-4 '>
            <h2 className="text-3xl font-bold text-blue-400 mb-4 ">Meine Hobbies</h2>
           
            <ul>
                {MeinDaten.hobbies.map((hobby, index) => {

                 
                  return<li key={index}>
                        <Link to={hobby} className="text-white hover:underline">
                            {hobby}
                        </Link>
                    </li>
                   
    })}
            </ul>
             </div>
        )
      
    }           