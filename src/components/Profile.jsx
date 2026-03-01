import Hero from "./Hero.jsx";
import Skills from "./Skills";
import TitlrText from "./TitlrText";
import HobbiesListe from '../components/HobbiesListe.jsx';

export default function Profile() {
    return (
        <div className="w-full m-auto p-3 sm:p-6 lg:w-3/4">

            <TitlrText />
            <Hero />
            <Skills />
            <HobbiesListe />

        </div>

    )
}
