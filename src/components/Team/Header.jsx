export default function Header() {
  return (
    <div className="pt-[70px] pb-10 flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center w-[90vw] md:w-[70vw]">
        <h3 className="font-semibold">KUCHENGAMES.DE</h3>
        <h1 className="font-extrabold md:text-5xl text-3xl">
          UNSER <span className="text-[var(--main-color)]">SERVER-TEAM</span>
        </h1>
        <p className="text-center text-[var(--description-color)]">
          Hier findest du eine aktuelle Auflistung all unserer Teammitglieder.
        </p>
      </div>
    </div>
  );
}
