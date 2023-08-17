import { useState } from 'react';

import { BsThreeDots } from 'react-icons/bs';
import Info from './Info';

export default function TeamCards({ members, roles }) {
    const skin_api_uri = 'https://mc-heads.net/head/';

    const paginateArray = (array, pageSize) => {
        const paginatedArray = [];
        for (let i = 0; i < array.length; i += pageSize) {
            paginatedArray.push(array.slice(i, i + pageSize));
        }
        return paginatedArray;
    };

    const paginatedMembers = paginateArray(members, 5);

    return (
        <div className="flex flex-wrap justify-center items-center">
            {paginatedMembers.map((rowMembers, rowIndex) => (
                <div key={'row-' + rowIndex} className="flex flex-wrap justify-center items-center">
                    {rowMembers.map((member) => {
                        const [isHovered, setIsHovered] = useState(false);

                        const name = member.name;
                        const role = member.role;
                        const uuid = member.uuid;

                        const role_data = roles[role];
                        const role_name = role_data ? role_data.name : 'Undefined';
                        const role_color = role_data ? role_data.color : '#f07b0781';

                        return (
                            <>
                                <div
                                    key={name}
                                    className="relative w-[120px] transition-all duration-500 m-2 flex flex-col items-center bg-[#5d5e61] border-[#46484c] border-2 cursor-pointer rounded-md hover:text-[white]"
                                    onMouseEnter={() => {
                                        setIsHovered(true);
                                    }}
                                    onMouseLeave={() => {
                                        setIsHovered(false);
                                    }}
                                    onClick={() => {
                                        Info.open(member, roles);
                                    }}
                                    style={{
                                        background: isHovered ? role_color : '#5d5e618d',
                                        height: isHovered ? '120px' : '140px',
                                        marginBottom: isHovered ? '20px' : '0'
                                    }}
                                >
                                    <div
                                        className="px-5 pt-3 transition-all duration-500"
                                        style={{
                                            width: isHovered ? '100px' : '120px',
                                            opacity: isHovered ? '0.7' : '1'
                                        }}
                                    >
                                        <img src={`${skin_api_uri}${uuid}`} alt="skin" />
                                    </div>
                                    <div
                                        className="font-bold text-sm pb-2 pt-3 transition-all duration-500"
                                        style={{
                                            fontSize: isHovered ? '11px' : '14px'
                                        }}
                                    >
                                        {name}
                                    </div>
                                    <div className="absolute w-full h-full flex justify-center">
                                        <div
                                            className="font-bold text-sm mt-auto transition-all duration-500 px-2 rounded-b-md"
                                            style={{
                                                translate: isHovered ? '0 20px' : '0 0',
                                                color: isHovered ? 'white' : 'transparent'
                                            }}
                                        >
                                            {role_name}
                                        </div>
                                    </div>
                                    <div className="absolute w-full h-full flex justify-center">
                                        <div
                                            className="m-auto transition-all duration-500"
                                            style={{
                                                opacity: isHovered ? '.8' : '0'
                                            }}
                                        >
                                            <BsThreeDots size={40} color="white" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

// export default function TeamCards({ members, roles }) {
//   const skin_api_uri = "https://mc-heads.net/head/";

//   return (
//     <div className="flex flex-wrap">
//       {members
//         .sort((a, b) => b.name - a.name)
//         .map((member) => {
//           const [isHovered, setIsHovered] = useState(false);

//           const name = member.name;
//           const role = member.role;
//           const uuid = member.uuid;

//           const role_data = roles[role];
//           const role_name = role_data ? role_data.name : "Undefined";
//           const role_color = role_data ? role_data.color : "#f07b0781";

//           return (
//             <>
//               <div
//                 key={name}
//                 className="relative w-[120px] transition-all duration-500 m-2 flex flex-col items-center bg-[#5d5e61] border-[#46484c] border-2 cursor-pointer rounded-md hover:text-[white]"
//                 onMouseEnter={() => {
//                   setIsHovered(true);
//                 }}
//                 onMouseLeave={() => {
//                   setIsHovered(false);
//                 }}
//                 onClick={() => {
//                   Info.open(member, roles);
//                 }}
//                 style={{
//                   background: isHovered ? role_color : "#5d5e618d",
//                   height: isHovered ? "120px" : "140px",
//                   marginBottom: isHovered ? "20px" : "0",
//                 }}
//               >
//                 <div
//                   className="px-5 pt-3 transition-all duration-500"
//                   style={{
//                     width: isHovered ? "100px" : "120px",
//                     opacity: isHovered ? "0.7" : "1",
//                   }}
//                 >
//                   <img src={`${skin_api_uri}${uuid}`} alt="skin" />
//                 </div>
//                 <div
//                   className="font-bold text-sm pb-2 pt-3 transition-all duration-500"
//                   style={{
//                     fontSize: isHovered ? "11px" : "14px",
//                   }}
//                 >
//                   {name}
//                 </div>
//                 <div className="absolute w-full h-full flex justify-center">
//                   <div
//                     className="font-bold text-sm mt-auto transition-all duration-500 px-2 rounded-b-md"
//                     style={{
//                       translate: isHovered ? "0 20px" : "0 0",
//                       color: isHovered ? "white" : "transparent",
//                     }}
//                   >
//                     {role_name}
//                   </div>
//                 </div>
//                 <div className="absolute w-full h-full flex justify-center">
//                   <div
//                     className="m-auto transition-all duration-500"
//                     style={{
//                       opacity: isHovered ? ".8" : "0",
//                     }}
//                   >
//                     <BsThreeDots size={40} color="white" />
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//     </div>
//   );
// }
