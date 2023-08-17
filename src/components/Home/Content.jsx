import { Link } from "react-router-dom";
import { FaDiscord, FaArrowRight } from "react-icons/fa";

import FAQAccordion from "./FAQAccordion";

import AboutPerson from "../../assets/images/about-person.png";

import CityBuildImage from "../../assets/images/citybuild.png";
import DungeonImage from "../../assets/images/dungeon.png";
import MineImage from "../../assets/images/mine.png";

export default function Content() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] select-text select-[var(--main-color)]">
      <section className="p-3 w-screen min-h-[60vh] bg-[var(--s1-background)] flex flex-col justify-center items-center">
        <div
          id="more"
          className="flex md:flex-row flex-col justify-between items-center w-[90vw]"
        >
          <div className="m-2 flex flex-col justify-center md:w-[50vw] w-[90vw]">
            <h2 className="text-xl font-bold">
              <span className="relative p-1 m-2 after:absolute after:h-[3px] after:w-[70%] after:bottom-[-1px] after:left-[0] after:bg-[var(--main-color)] aaa before:absolute before:h-[1px] before:w-full before:bottom-[-1px] before:left-[0] before:bg-[var(--white-color)]">
                Wer sind wir?
              </span>
            </h2>
            <p className="p-1 m-2 text-[var(--description-color)]">
              KuchenGames.de ist ein deutscher Minecraft Citybuild Server,
              welcher seit dem Jahr 2020 aktiv in der Entwicklung ist!
              <br />
              Wir zeichnen uns besonders durch unserer starken Zusammenarbeit
              mit unserer Community und der Vielfältigkeit unseres Citybuilds
              aus.
            </p>
          </div>
          <div className="m-2 flex flex-col justify-center">
            <div className="relative w-[250px] h-[250px] shadow-sm shadow-[var(--main-color)] bg-[var(--main-color)] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[3px] rounded-bl-[3px]">
              <img
                className="m-2 absolute bottom-0 left-0 h-[200px]"
                src={AboutPerson}
                alt="Minecraft person"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 w-screen min-h-[60vh] bg-[var(--s2-background)] flex flex-col justify-center items-center">
        <div className="p-3 mt-4 bg-[var(--s2-background)] flex md:flex-row flex-col justify-between items-center">
          <div className="m-2 flex flex-col justify-center">
            <img
              className="m-2 h-[200px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[3px] rounded-bl-[3px]"
              src={CityBuildImage}
              alt="Minecraft person"
            />
          </div>
          <div className="m-2 flex flex-col justify-center md:w-[50vw] w-[90vw]">
            <h2 className="text-xl font-bold">
              <span className="relative p-1 m-2 after:absolute after:h-[3px] after:w-[70%] after:bottom-[-1px] after:left-[0] after:bg-[var(--main-color)] aaa before:absolute before:h-[1px] before:w-full before:bottom-[-1px] before:left-[0] before:bg-[var(--white-color)]">
                Citybuild
              </span>
            </h2>
            <p className="p-1 m-2 text-[var(--description-color)]">
              Unser CityBuild Server ist eine von Spielern erschaffene Umgebung,
              die sich in einem Persönlichen und Begrenztem Quadratischen
              Plot-System verhält. Die Items und Baublöcke für die Plots werden
              über die jeweiligen Farmwelten, Overworld / Nether / End
              freigeschaltet und selbst erworben. Gefördert wird das
              Spielerlebnis von der Community, die eigene Shops, Strukturen,
              Häuser oder Historische Strukturen nachbauen können. Natürlich
              gibt es auch von dem KuchenGames-Team, sowohl der Community Events
              die einem Weiterbringende Items, Blöcke, Rüstung oder Ganze Plots
              verlost werden kann.
            </p>
          </div>
        </div>

        <div className="p-3 mt-4 bg-[var(--s2-background)] flex md:flex-row flex-col justify-between items-center">
          <div className="m-2 flex flex-col justify-center md:w-[50vw] w-[90vw]">
            <h2 className="text-xl font-bold">
              <span className="relative p-1 m-2 after:absolute after:h-[3px] after:w-[70%] after:bottom-[-1px] after:left-[0] after:bg-[var(--main-color)] aaa before:absolute before:h-[1px] before:w-full before:bottom-[-1px] before:left-[0] before:bg-[var(--white-color)]">
                Dungeons
              </span>
            </h2>
            <p className="p-1 m-2 text-[var(--description-color)]">
              Unsere Dungeon Welt findet auf Einzelnen Inseln statt, die von
              Custom Monstern und Mobs Infiziert sind. Die Inseln bestehen aus
              Einzelnen Biomen und funktioniert mit einem selbst erstelltem
              System statt, wo für jedes vernichtete Monster ein Item fallen
              gelassen wird. Diese Items variieren in Seltenheit und wert, und
              können mit der Community für andere Items ausgetauscht werden.
            </p>
          </div>
          <div className="m-2 flex flex-col justify-cente">
            <img
              className="m-2 h-[200px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[3px] rounded-bl-[3px]"
              src={DungeonImage}
              alt="Minecraft person"
            />
          </div>
        </div>

        <div className="p-3mt-4 bg-[var(--s2-background)] flex md:flex-row flex-col justify-between items-center">
          <div className="m-2 flex flex-col justify-cente">
            <img
              className="m-2 h-[200px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[3px] rounded-bl-[3px]"
              src={MineImage}
              alt="Minecraft person"
            />
          </div>
          <div className="m-2 flex flex-col justify-center md:w-[50vw] w-[90vw]">
            <h2 className="text-xl font-bold">
              <span className="relative p-1 m-2 after:absolute after:h-[3px] after:w-[70%] after:bottom-[-1px] after:left-[0] after:bg-[var(--main-color)] aaa before:absolute before:h-[1px] before:w-full before:bottom-[-1px] before:left-[0] before:bg-[var(--white-color)]">
                Mine
              </span>
            </h2>
            <p className="p-1 m-2 text-[var(--description-color)]">
              Unsere Mine führt sich in einer großen und selbst erstellte
              Umgebung ab, die von unserem Builder Team mit viel Mühe und
              Aufwand erstellt wurde. Hier Geht es um das abbauen der Erze, die
              je nach Variante und Größe eine bestimmte summe von Ingame Geld
              dem Spieler verteilt. Die Erze führen sich in einem Ebenem System
              ab, wo nach bestimmter Zeit und Arbeit ein neuer Bereich mit neuen
              erzen mit höherem Wert freigeschaltet wird.
            </p>
          </div>
        </div>
      </section>

      <section className="p-3 w-screen min-h-[60vh] flex flex-col justify-center items-center">
        <div className="m-2 flex flex-col text-center items-center justify-center md:w-[50vw] w-[90vw]">
          <h2 className="text-xl font-bold">
            <span className="relative p-1 m-2 after:absolute after:h-[3px] after:w-[70%] after:bottom-[-1px] after:left-[0] after:bg-[var(--main-color)] aaa before:absolute before:h-[1px] before:w-full before:bottom-[-1px] before:left-[0] before:bg-[var(--white-color)]">
              Probleme?
            </span>
          </h2>
          <p className="p-1 m-2 text-[var(--description-color)] text-lg">
            Wenn du irgendwelche Fragen oder Probleme hast kannst du gerne
            unserem Discordserver beitreten.
          </p>
          <Link
            to="https://discord.kuchengames.de"
            target="_blank"
            className="flex flex-row justify-center w-[300px] items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-l px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <FaDiscord className="mr-3" size="1.5rem" /> Beitreten
          </Link>
        </div>
      </section>

      <section className="p-3 w-screen min-h-[35vh] bg-[var(--s1-background)] flex md:flex-row flex-col justify-around items-center">
        <div className="m-2 flex flex-col justify-center md:w-[30vw] w-[90vw]">
          <h2 className="text-xl font-bold">
            <span className="relative p-1 m-2 after:absolute after:h-[3px] after:w-[70%] after:bottom-[-1px] after:left-[0] after:bg-[var(--main-color)] aaa before:absolute before:h-[1px] before:w-full before:bottom-[-1px] before:left-[0] before:bg-[var(--white-color)]">
              Warum sollte ich voten?
            </span>
          </h2>
          <p className="p-1 m-2 text-[var(--description-color)]">
            Wenn du für den Server votest, hilft uns das in den Serverlisten
            weiter oben zu stehen um so mehr neue Spieler anzulocken.
          </p>
        </div>
        <div className="flex flex-col items-left justify-center max-w-sm p-3 rounded-lg shadow bg-zinc-700 border-zinc-500">
          <h2 className="font-bold text-xl pb-2">minecraft-server.eu</h2>
          <hr />
          <div className="flex flex-row items-center justify-around pt-2">
            <p className="w-[70%]">Voten und Belohnung erhalten..</p>

            <Link
              target="_blank"
              to="https://vote.kuchengames.de"
              className="flex flex-col items-center justify-center bg-orange-400 hover:bg-orange-500 shadow rounded-lg"
            >
              <div className="m-2 flex flex-col items-center text-black hover:text-grey-900 justify-center bg-orange-500 hover:bg-orange-600 shadow rounded-lg">
                <FaArrowRight className="m-1" size="1.5rem" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="p-3 w-screen min-h-[60vh] flex flex-col justify-center items-center">
        <div className="m-2 mb-5 flex flex-col justify-center items-center md:w-[50vw] w-[90vw]">
          <h2 className="text-xl font-bold">
            <span className="relative p-1 m-2 after:absolute after:h-[3px] after:w-[70%] after:bottom-[-1px] after:left-[0] after:bg-[var(--main-color)] aaa before:absolute before:h-[1px] before:w-full before:bottom-[-1px] before:left-[0] before:bg-[var(--white-color)]">
              Häufig gestellte{" "}
              <span className="text-[var(--main-color)] font-extrabold">
                Fragen
              </span>
            </span>
          </h2>
        </div>

        <FAQAccordion />
      </section>

      <section className="w-screen min-h-[100px]"></section>
    </div>
  );
}
