import Hero from "./Hero.jsx";
import Skills from "./Skills";
import TitlrText from "./TitlrText";
import HobbiesListe from '../components/HobbiesListe.jsx';

export default function Profile() {
    return (
        <div className="p-6 w-full lg:w-3/4 m-auto">

            <TitlrText />
            <Hero />
            <Skills />
            <HobbiesListe />

        </div>

    )
}
