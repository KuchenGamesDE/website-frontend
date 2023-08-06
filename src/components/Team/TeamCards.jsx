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
                        className="w-[120px] m-2 flex flex-col items-center bg-[#80808063] cursor-pointer transition rounded-md hover:text-[white]"
                        onMouseEnter={e => {setIsHovered(true)}}
                        onMouseLeave={e => {setIsHovered(false)}}
                        style={{
                            background: isHovered
                                ? role_color
                                : "#80808063"
                        }}
                    >
                        <div
                            className="px-5 pt-3 w-[120px]"
                        >
                            <img src={`${skin_api_uri}${uuid}`} alt="" />
                        </div>
                        <div
                            className="font-bold text-sm pb-2 pt-3"
                        >
                            {name}
                        </div>
                    </div>
                )

            })}
        </div>
    );
}
