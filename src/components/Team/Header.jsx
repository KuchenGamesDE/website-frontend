export default function Header() {
    return (
        <div className="flex flex-col items-center justify-center pb-10 pt-[70px] text-white">
            <div className="flex w-[90vw] flex-col items-center justify-center md:w-[70vw]">
                <h3 className="font-semibold">KUCHENGAMES.DE</h3>
                <h1 className="text-3xl font-extrabold md:text-5xl">
                    UNSER <span className="text-[var(--main-color)]">SERVER-TEAM</span>
                </h1>
                <p className="text-center text-[var(--description-color)]">Hier findest du eine aktuelle Auflistung all unserer Teammitglieder.</p>
            </div>
        </div>
    );
}
