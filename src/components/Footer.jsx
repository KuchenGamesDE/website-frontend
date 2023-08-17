import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaGithub,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import Logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <footer className="p-3 flex flex-col items-left justify-start w-screen min-h-[150px] bg-zinc-900">
      <div className="flex md:flex-row flex-col items-left justify-start">
        <Link
          to="https://kuchengames.de"
          className="p-2 text-[var(--white-color)] hover:text-white flex-shrink-0 font-bold flex flex-row items-center"
        >
          <img className="h-[70px] w-[70px]" src={Logo} alt="Workflow" />
          <p className="ml-2 text-xl font-extrabold tracking-tight">
            KuchenGames
          </p>
        </Link>
      </div>

      <div className="flex flex-row items-left justify-start mb-2">
        <Link
          target="_blank"
          to="https://discord.kuchengames.de"
          className="p-2 text-[var(--main-color)]"
        >
          <FaDiscord className="mr-1" size="1.5rem" />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/kuchengamesde"
          className="p-2 text-[var(--main-color)]"
        >
          <FaGithub className="mr-1" size="1.5rem" />
        </Link>
        <Link
          target="_blank"
          to="https://www.tiktok.com/@kuchengames.de"
          className="p-2 text-[var(--main-color)]"
        >
          <FaTiktok className="mr-1" size="1.5rem" />
        </Link>
        <Link
          target="_blank"
          to="https://www.instagram.com/kuchengames"
          className="p-2 text-[var(--main-color)]"
        >
          <FaInstagram className="mr-1" size="1.5rem" />
        </Link>
        <Link
          target="_blank"
          to="https://twitter.com/KuchenGamesDE"
          className="p-2 text-[var(--main-color)]"
        >
          <FaTwitter className="mr-1" size="1.5rem" />
        </Link>
        <Link
          target="_blank"
          to="https://www.youtube.com/@KuchenGamesDE"
          className="p-2 text-[var(--main-color)]"
        >
          <FaYoutube className="mr-1" size="1.5rem" />
        </Link>
      </div>

      <hr />

      <p className="mt-2 pt-2 text-sm font-semibold text-[var(--description-color)]">
        Copyright © 2023 »{" "}
        <Link
          target="_blank"
          to="https://kuchengames.de"
          className="hover:text-[var(--main-color)]"
        >
          KuchenGames.de
        </Link>
      </p>

      <p className="pt-2 text-sm font-thin text-[var(--description-color)]">
        Made with ❤ by{" "}
        <Link
          target="_blank"
          to="https://github.com/LuciferMorningstarDev"
          className="hover:text-[var(--main-color)]"
        >
          LuciferMorningstarDev
        </Link>
      </p>
    </footer>
  );
}
