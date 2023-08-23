import headerBackground from '../assets/images/bg-header.png';

export default function Background() {
    return <img src={headerBackground} alt="headerBackground" className="fixed left-0 top-0 z-[-1] h-screen w-screen" />;
}
