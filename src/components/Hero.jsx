import PortfolioImageWithSpinner from "./PortfolioImageWithSpinner";
import photo from "../assets/Mein foto.JPEG";
import Selbstbeschreibung from "./Selbstbeschreibung";

export default function Hero() {
  return (
    <div className="border p-6 rounded-2xl shadow-blue-900 shadow-lg  m-auto bg-blue-900/5 border-blue-500 backdrop-blur-md">
      <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-3 mt-6">
        
        <Selbstbeschreibung /> 

        <PortfolioImageWithSpinner
          src={photo}
          alt="Profilbild"
          className="w-40 rounded-2xl m-auto hover:shadow-2xl shadow-blue-400/50"
        />

      </section>
    </div>
  );
}

