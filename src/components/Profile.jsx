import ProfileImage from "./ProfileImage";
import Selbstbeschreibung from "./Selbstbeschreibung";
import Skills from "./Skills";
import TitlrText from "./TitlrText";

export default function Profile() {
    return (
        <div className="p-6 w-full lg:w-3/4 m-auto">

            <TitlrText />
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-3 mt-6">

                <Selbstbeschreibung />
                <ProfileImage />
            </div>
            <Skills />

        </div>

    )
}
