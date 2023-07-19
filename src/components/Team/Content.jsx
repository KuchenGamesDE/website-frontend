export default function Content() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] select-text select-[var(--main-color)]">
      <section className="p-3 w-screen min-h-[60vh] bg-[var(--s2-background)] flex flex-col justify-center items-center">
        <div className="m-2 flex flex-col justify-center items-center md:w-[50vw] w-[90vw]">
          <h2 className="text-2xl font-bold">
            <span className="relative p-1 m-2 after:absolute after:h-[3px] after:w-[70%] after:bottom-[-1px] after:left-[0] after:bg-[var(--main-color)] aaa before:absolute before:h-[1px] before:w-full before:bottom-[-1px] before:left-[0] before:bg-[var(--white-color)]">
              COMING SOON
            </span>
          </h2>
        </div>
      </section>
      <section className="w-screen min-h-[100px]"></section>
    </div>
  );
}
