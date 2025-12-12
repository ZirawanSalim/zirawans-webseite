import { useImmerReducer } from "use-immer";
import MeinDaten from "../data/MeinDaten.json" with { type: "json" };
import armband7 from "/armband7.jpg";
import armband1 from "/armband1.jpg";
import armband2 from "/armband2.jpg";
import framer from "/framer.png";

import searchReducer, { initialSearchState } from "../reducers/searchReducer";

export default function MeinProjekte() {

  const [state, dispatch] = useImmerReducer(searchReducer, initialSearchState);

  const getBild = (bildPfad) => {
    if (bildPfad.includes("armband7.jpg")) return armband7;
    if (bildPfad.includes("armband1.jpg")) return armband1;
    if (bildPfad.includes("armband2.jpg")) return armband2;
    if (bildPfad.includes("framer.png")) return framer;
    return;
  };

  const getObjectFit = (bildPfad) => {
    if (bildPfad.includes("framer.png")) {
      return "object-contain";
    }
    return "object-cover";
  };

 
  const gefilterteProjekte = MeinDaten.projekte.filter((projekt) =>
    projekt.titel.toLowerCase().includes(state.query.toLowerCase())
  );

  return (
    <div className="m-4 p-4">
      <h2 className="text-3xl font-bold text-blue-400 mb-8 ml-40">
        Meine Projekte
      </h2>

     
      <div className="ml-40 mb-6 flex gap-4">

        <input
          type="text"
          placeholder="Projekte durchsuchen..."
          value={state.query}
          onChange={(e) =>
            dispatch({
              type: "updateSearchQuery",
              payload: e.target.value,
            })
          }
          className="p-2 rounded bg-gray-700 text-white w-80 border border-gray-600"
        />

        {state.query.length > 0 && (
          <button
            onClick={() => dispatch({ type: "cancelSearch" })}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            X Löschen
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-full">
        {gefilterteProjekte.map((projekt, index) => {
          return (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div
                className={`relative h-48 w-full overflow-hidden bg-gray-900 ${
                  getObjectFit(projekt.bild) === "object-contain"
                    ? "flex items-center justify-center"
                    : ""
                }`}
              >
                <img
                  src={getBild(projekt.bild)}
                  alt={projekt.titel}
                  className={`w-full h-full ${getObjectFit(
                    projekt.bild
                  )} hover:scale-105 transition-transform duration-300`}
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {projekt.titel}
                </h3>

                <p className="mb-4 text-gray-300 text-sm leading-relaxed">
                  {projekt.beschreibung}
                </p>

                <div className="mb-4">
                  <span className="text-blue-400 font-semibold text-sm">
                    Technologien:{" "}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projekt.technologien.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={projekt.URL}
                  className="inline-block text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zum Projekt →
                </a>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
