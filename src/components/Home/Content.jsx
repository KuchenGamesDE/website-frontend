import { Link } from 'react-router-dom';
import { FaDiscord, FaArrowRight } from 'react-icons/fa';

import FAQAccordion from './FAQAccordion';

import AboutPerson from '../../assets/images/about-person.png';

import CityBuildImage from '../../assets/images/citybuild.png';
import DungeonImage from '../../assets/images/dungeon.png';
import MineImage from '../../assets/images/mine.png';

export default function Content() {
    return (
        <div className="select-[var(--main-color)] flex min-h-[100vh] select-text flex-col items-center justify-center">
            <section className="flex min-h-[60vh] w-screen flex-col items-center justify-center bg-[var(--s1-background)] p-3">
                <div id="more" className="flex w-[90vw] flex-col items-center justify-between md:flex-row">
                    <div className="m-2 flex w-[90vw] flex-col justify-center md:w-[50vw]">
                        <h2 className="text-xl font-bold">
                            <span className="aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]">
                                Wer sind wir?
                            </span>
                        </h2>
                        <p className="m-2 p-1 text-[var(--description-color)]">
                            KuchenGames.de ist ein deutscher Minecraft Citybuild Server, welcher seit dem Jahr 2020 aktiv in der Entwicklung ist!
                            <br />
                            Wir zeichnen uns besonders durch unsere starke Zusammenarbeit mit unserer Community und der Vielfältigkeit unseres Citybuilds aus.
                        </p>
                    </div>
                    <div className="m-2 flex flex-col justify-center">
                        <div className="relative h-[250px] w-[250px] rounded-bl-[3px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[3px] bg-[var(--main-color)] shadow-sm shadow-[var(--main-color)]">
                            <img className="absolute bottom-0 left-0 m-2 h-[200px]" src={AboutPerson} alt="Minecraft person" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex min-h-[60vh] w-screen flex-col items-center justify-center bg-[var(--s2-background)] p-3">
                <div className="mt-4 flex flex-col items-center justify-between bg-[var(--s2-background)] p-3 md:flex-row">
                    <div className="m-2 flex flex-col justify-center">
                        <img className="m-2 h-[200px] rounded-bl-[3px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[3px]" src={CityBuildImage} alt="Minecraft person" />
                    </div>
                    <div className="m-2 flex w-[90vw] flex-col justify-center md:w-[50vw]">
                        <h2 className="text-xl font-bold">
                            <span className="aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]">
                                Citybuild
                            </span>
                        </h2>
                        <p className="m-2 p-1 text-[var(--description-color)]">
                            Unser CityBuild Server ist eine von Spielern erschaffene Umgebung, die sich in einem Persönlichen und Begrenztem Quadratischen Plot-System verhält. Die
                            Items und Baublöcke für die Plots werden über die jeweiligen Farmwelten, Overworld / Nether / End freigeschaltet und selbst erworben. Gefördert wird das
                            Spielerlebnis von der Community, die eigene Shops, Strukturen, Häuser oder Historische Strukturen nachbauen können. Natürlich gibt es auch von dem
                            KuchenGames-Team, sowohl der Community Events die einem Weiterbringende Items, Blöcke, Rüstung oder Ganze Plots verlost werden kann.
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex flex-col items-center justify-between bg-[var(--s2-background)] p-3 md:flex-row">
                    <div className="m-2 flex w-[90vw] flex-col justify-center md:w-[50vw]">
                        <h2 className="text-xl font-bold">
                            <span className="aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]">
                                Dungeons
                            </span>
                        </h2>
                        <p className="m-2 p-1 text-[var(--description-color)]">
                            Unsere Dungeon Welt findet auf Einzelnen Inseln statt, die von Custom Monstern und Mobs Infiziert sind. Die Inseln bestehen aus Einzelnen Biomen und
                            funktioniert mit einem selbst erstelltem System statt, wo für jedes vernichtete Monster ein Item fallen gelassen wird. Diese Items variieren in
                            Seltenheit und wert, und können mit der Community für andere Items ausgetauscht werden.
                        </p>
                    </div>
                    <div className="justify-cente m-2 flex flex-col">
                        <img className="m-2 h-[200px] rounded-bl-[3px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[3px]" src={DungeonImage} alt="Minecraft person" />
                    </div>
                </div>

                <div className="p-3mt-4 flex flex-col items-center justify-between bg-[var(--s2-background)] md:flex-row">
                    <div className="justify-cente m-2 flex flex-col">
                        <img className="m-2 h-[200px] rounded-bl-[3px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[3px]" src={MineImage} alt="Minecraft person" />
                    </div>
                    <div className="m-2 flex w-[90vw] flex-col justify-center md:w-[50vw]">
                        <h2 className="text-xl font-bold">
                            <span className="aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]">
                                Mine
                            </span>
                        </h2>
                        <p className="m-2 p-1 text-[var(--description-color)]">
                            Unsere Mine führt sich in einer großen und selbst erstellte Umgebung ab, die von unserem Builder Team mit viel Mühe und Aufwand erstellt wurde. Hier
                            Geht es um das abbauen der Erze, die je nach Variante und Größe eine bestimmte summe von Ingame Geld dem Spieler verteilt. Die Erze führen sich in einem
                            Ebenem System ab, wo nach bestimmter Zeit und Arbeit ein neuer Bereich mit neuen erzen mit höherem Wert freigeschaltet wird.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex min-h-[60vh] w-screen flex-col items-center justify-center p-3">
                <div className="m-2 flex w-[90vw] flex-col items-center justify-center text-center md:w-[50vw]">
                    <h2 className="text-xl font-bold">
                        <span className="aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]">
                            Probleme?
                        </span>
                    </h2>
                    <p className="m-2 p-1 text-lg text-[var(--description-color)]">
                        Wenn du irgendwelche Fragen oder Probleme hast kannst du gerne unserem Discordserver beitreten.
                    </p>
                    <Link
                        to="https://discord.kuchengames.de"
                        target="_blank"
                        className="text-l mb-2 mr-2 flex w-[300px] flex-row items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <FaDiscord className="mr-3" size="1.5rem" /> Beitreten
                    </Link>
                </div>
            </section>

            <section className="flex min-h-[35vh] w-screen flex-col items-center justify-around bg-[var(--s1-background)] p-3 md:flex-row">
                <div className="m-2 flex w-[90vw] flex-col justify-center md:w-[30vw]">
                    <h2 className="text-xl font-bold">
                        <span className="aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]">
                            Warum sollte ich voten?
                        </span>
                    </h2>
                    <p className="m-2 p-1 text-[var(--description-color)]">
                        Wenn du für den Server votest, hilft uns das in den Serverlisten weiter oben zu stehen um so mehr neue Spieler anzulocken.
                    </p>
                </div>
                <div className="items-left flex max-w-sm flex-col justify-center rounded-lg border-zinc-500 bg-zinc-700 p-3 shadow">
                    <h2 className="pb-2 text-xl font-bold">minecraft-server.eu</h2>
                    <hr />
                    <div className="flex flex-row items-center justify-around pt-2">
                        <p className="w-[70%]">Voten und Belohnung erhalten..</p>

                        <Link
                            target="_blank"
                            to="https://vote.kuchengames.de"
                            className="flex flex-col items-center justify-center rounded-lg bg-orange-400 shadow hover:bg-orange-500"
                        >
                            <div className="hover:text-grey-900 m-2 flex flex-col items-center justify-center rounded-lg bg-orange-500 text-black shadow hover:bg-orange-600">
                                <FaArrowRight className="m-1" size="1.5rem" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="flex min-h-[60vh] w-screen flex-col items-center justify-center p-3">
                <div className="m-2 mb-5 flex w-[90vw] flex-col items-center justify-center md:w-[50vw]">
                    <h2 className="text-xl font-bold">
                        <span className="aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]">
                            Häufig gestellte <span className="font-extrabold text-[var(--main-color)]">Fragen</span>
                        </span>
                    </h2>
                </div>

                <FAQAccordion />
            </section>

            <section className="min-h-[100px] w-screen"></section>
        </div>
    );
}
