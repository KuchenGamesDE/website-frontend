import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import DiscordServerInfo from '../DiscordServerInfo';
import MinecraftServerInfo from '../MinecraftServerInfo';

import Logo from '../../assets/images/logo.png';

export default function Header() {
    return (
        <div className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-around text-white md:flex-row">
            <div className="items-left flex min-h-[calc(80vh)] w-[90vw] flex-col justify-center md:w-[35vw]">
                <h3 className="font-semibold">MINECRAFT CITYBUILD NETZWERK</h3>
                <h1 className="text-3xl font-extrabold text-[var(--main-color)] md:text-5xl">KUCHENGAMES.DE</h1>
                <div className="my-4 h-1 w-full bg-gray-700"></div>
                <p className="text-[var(--white-color)] drop-shadow-lg">
                    Bereit, deine eigene Stadt zu bauen? Auf unserem Minecraft Citybuild kannst du zeigen, was in dir steckt! Hier darfst du gerne kreativ sein und einzigartige
                    Gebäude errichten - solange sie nicht zu sehr in die Höhe ragen und unseren Server zum Absturz bringen. Wirf schon mal deinen Bauplan an und bleib dran für
                    weitere Updates!
                </p>
                <br />

                <p className="text-[var(--white-color)]">Tritt uns bei und Spiele mit deinen Freunden</p>
                <div className="mt-4 flex w-full flex-row items-center justify-around">
                    <button
                        onClick={() => {
                            if (navigator?.clipboard) {
                                navigator.clipboard.writeText('kuchengames.de:25565');
                                toast.success('🍰 IP erfolgreich kopiert!');
                            } else toast.error('🍰 Error!');
                        }}
                        className="inline-flex items-center rounded bg-[#07bc0c] px-4 py-2 font-bold text-[black] transition-all hover:bg-[#2c722f] hover:text-[white]"
                    >
                        <span>IP Kopieren</span>
                    </button>
                    <Link
                        to="https://discord.kuchengames.de"
                        className="border-1 inline-flex items-center rounded border-white bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                    >
                        <span>Discord beitreten</span>
                    </Link>
                </div>
            </div>
            <div className="flex min-h-[calc(80vh)] w-[90vw] flex-col items-center justify-center md:w-[35vw]">
                <img className="float max-w-[400px]" src={Logo} alt="Logo" />

                <div className="mt-4 flex w-full flex-row items-center justify-around rounded-md bg-gray-400 bg-opacity-10 bg-clip-padding p-4 backdrop-blur-lg backdrop-filter">
                    <DiscordServerInfo />
                    <MinecraftServerInfo />
                </div>
            </div>
        </div>
    );
}
