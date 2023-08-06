import TeamLayout from './TeamLayout';

export default function Content() {

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] select-text select-[var(--main-color)]">
      <section className="p-3 w-screen min-h-[60vh] bg-[var(--s2-background)] flex flex-col justify-center items-center">
        <div className="m-2 flex flex-col w-[100%] items-center">
          <TeamLayout />
        </div>
      </section>
      <section className="w-screen min-h-[100px]"></section>
    </div>
  );
}
