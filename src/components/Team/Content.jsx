import TeamLayout from './TeamLayout';

export default function Content() {
    return (
        <div className="select-[var(--main-color)] flex min-h-[100vh] select-text flex-col items-center justify-center">
            <section className="flex min-h-[60vh] w-screen flex-col items-center justify-center bg-[var(--s2-background)] p-3">
                <div className="m-2 flex w-[100%] flex-col items-center">
                    <TeamLayout />
                </div>
            </section>
            <section className="min-h-[100px] w-screen"></section>
        </div>
    );
}
