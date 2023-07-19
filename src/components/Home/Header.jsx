import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import DiscordServerInfo from "../DiscordServerInfo";
import MinecraftServerInfo from "../MinecraftServerInfo";

import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <div className="min-h-[calc(100vh-70px)] flex md:flex-row flex-col items-center justify-around text-white">
      <div className="min-h-[calc(80vh)] flex flex-col items-left justify-center w-[90vw] md:w-[35vw]">
        <h3 className="font-semibold">MINECRAFT CITYBUILD NETZWERK</h3>
        <h1 className="font-extrabold md:text-5xl text-3xl text-[var(--main-color)]">
          KUCHENGAMES.DE
        </h1>
        <div className="h-1 w-full bg-gray-700 my-4"></div>
        <p className="text-[var(--description-color)]">
          Bereit, deine eigene Stadt zu bauen? Auf unserem Minecraft Citybuild
          kannst du zeigen, was in dir steckt! Hier darfst du gerne kreativ sein
          und einzigartige Gebäude errichten - solange sie nicht zu sehr in die
          Höhe ragen und unseren Server zum Absturz bringen. Wirf schon mal
          deinen Bauplan an und bleib dran für weitere Updates!
        </p>
        <br />

        <p className="text-[var(--description-color)]">
          Tritt uns bei und Spiele mit deinen Freunden
        </p>
        <div className="w-full mt-4 flex flex-row items-center justify-around">
          <button
            onClick={() => {
              if (navigator?.clipboard) {
                navigator.clipboard.writeText("kuchengames.de:25565");
                toast.success("🍰 IP erfolgreich kopiert!");
              } else toast.error("🍰 Error!");
            }}
            className="bg-green-500 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span>IP Kopieren</span>
          </button>
          <Link
            to="https://discord.kuchengames.de"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center border-1 border-white"
          >
            <span>Discord beitreten</span>
          </Link>
        </div>
      </div>
      <div className="min-h-[calc(80vh)] flex flex-col items-center justify-center w-[90vw] md:w-[35vw]">
        <img
          className="h-[200px] w-[200px] animate-bounce"
          src={Logo}
          alt="Logo"
        />

        <div className="mt-4 p-4 w-full flex flex-row items-center justify-around bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
          <DiscordServerInfo />
          <MinecraftServerInfo />
        </div>
      </div>
    </div>
  );
}
