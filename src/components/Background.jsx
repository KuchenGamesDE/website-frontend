import headerBackground from "../assets/images/bg-header.jpg";

export default function Background() {
  return (
    <img
      src={headerBackground}
      alt="headerBackground"
      className="fixed top-0 left-0 z-[-1] w-screen h-screen"
    />
  );
}
