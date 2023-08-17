import TeamCards from "./TeamCards";
import team from "./team";

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
            <div
              key={name}
              className="md:w-[80%] xl:w-[50%] w-[100%] transition-all flex flex-col"
            >
              <div className="w-full flex">
                <span className="mx-auto font-bold px-5 text-2xl relative p-1 m-2 after:absolute after:h-[3px] after:w-[70%] after:bottom-[-1px] after:left-[0] after:bg-[var(--main-color)] before:absolute before:h-[1px] before:w-full before:bottom-[-1px] before:left-[0] before:bg-[var(--white-color)]">
                  {name}
                </span>
              </div>

              <div className="mx-1 mb-7 mt-3 p-5 bg-[#ffffff1e] rounded-md flex justify-center items-center">
                <TeamCards members={members} roles={roles} />
              </div>
            </div>
          );
        })}
    </>
  );
}
