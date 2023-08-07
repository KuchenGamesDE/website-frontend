import { useState } from "react";

export default function TeamCards({ members, roles }) {

    const skin_api_uri = "https://mc-heads.net/head/"

    return (
        <div
            className="flex flex-wrap"
        >
            {members.sort((a, b) => b.name - a.name).map(member => {

                const [isHovered, setIsHovered] = useState(false);

                const name = member.name
                const role = member.role
                const uuid = member.uuid

                const role_data = roles[role]
                const role_name = role_data ? role_data.name : "Undefined"
                const role_color = role_data ? role_data.color : "#f07b0781"

                return (
                    <div
                        title={role_name}
                        key={name}
                        className="relative w-[120px] transition-all m-2 flex flex-col items-center bg-[#5d5e61] cursor-pointer rounded-md hover:text-[white]"
                        onMouseEnter={() => {setIsHovered(true)}}
                        onMouseLeave={() => {setIsHovered(false)}}
                        style={{
                            background: isHovered
                                ? role_color
                                : "#5d5e618d",
                            height: isHovered
                                ? "120px"
                                : "140px",
                            marginBottom: isHovered
                                ? "20px"
                                : "0"
                        }}
                    >
                        <div
                            className="px-5 pt-3 transition-all"
                            style={{
                                width: isHovered
                                    ? "100px"
                                    : "120px",
                                opacity: isHovered
                                    ? "0.7"
                                    : "1"
                            }}
                        >
                            <img src={`${skin_api_uri}${uuid}`} alt="" />
                        </div>
                        <div
                            className="font-bold text-sm pb-2 pt-3"
                        >
                            {name}
                        </div>
                        <div
                            className="absolute w-full h-full flex justify-center"
                        >
                            <div
                                className="font-bold text-sm mt-auto transition-all px-2 rounded-b-md"
                                style={{
                                    translate: isHovered
                                        ? "0 20px"
                                        : "0 0px",
                                    color: isHovered
                                        ? "white"
                                        : "transparent"
                                }}
                            >
                                {role_name}
                            </div>
                        </div>
                    </div>
                )

            })}
        </div>
    );
}
