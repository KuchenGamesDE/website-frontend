import TeamCards from './TeamCards';
import team from './team';

export default function TeamLayout() {
    return (
        <>
            {team.categories
                .sort((a, b) => b.weight - a.weight)
                .map((category) => {
                    const name = category.name;
                    const category_name = category.category;
                    const members = [];
                    const roles = team.roles;

                    for (let member of team.members) {
                        if (member.category === category_name) {
                            members.push(member);
                        }
                    }

                    return (
                        <div key={name} className="flex w-[100%] flex-col transition-all md:w-[80%] xl:w-[50%]">
                            <div className="flex w-full">
                                <span className="relative m-2 mx-auto p-1 px-5 text-2xl font-bold before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]">
                                    {name}
                                </span>
                            </div>

                            <div className="mx-1 mb-7 mt-3 flex items-center justify-center rounded-md bg-[#ffffff1e] p-5">
                                <TeamCards members={members} roles={roles} />
                            </div>
                        </div>
                    );
                })}
        </>
    );
}
