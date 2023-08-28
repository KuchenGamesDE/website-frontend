import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { AiOutlineClose } from 'react-icons/ai';
import ReactSkinview3d from 'react-skinview3d';
import { IdleAnimation, FunctionAnimation } from 'skinview3d';

var InfoRoot = undefined;

// Create a FunctionAnimation for the entire sequence
const animationDuration = 4000; // Animation duration in milliseconds
const fullSequenceAnimation = new FunctionAnimation((player, deltaTime) => {
    const currentTime = performance.now(); // Current time in milliseconds
    const animationProgress = (currentTime % animationDuration) / animationDuration;

    // Raise arm, wink, lower arm, and nod with head
    const maxArmRotation = Math.PI / 3; // Maximum rotation angle for arm raising and lowering
    const maxWinkRotation = Math.PI / 8; // Maximum rotation angle for winking
    const maxHeadNod = Math.PI / 6; // Maximum rotation angle for head nodding

    // console.log(animationProgress);

    if (animationProgress < 0.25) {
        // Raise arm
        player.skin.rightArm.rotation.x = -animationProgress * maxArmRotation * 4;
    } else if (animationProgress < 0.5) {
        // Wink from left to right
        const winkProgress = (animationProgress - 0.25) * 4; // Adjust to a range of 0 to 1
        player.skin.rightArm.rotation.x = -maxArmRotation;
        player.skin.head.rotation.yaw = maxWinkRotation * Math.sin(Math.PI * winkProgress);
    } else if (animationProgress < 0.75) {
        // Lower arm
        player.skin.rightArm.rotation.x = -maxArmRotation + (animationProgress - 0.5) * maxArmRotation * 4;
        player.skin.head.rotation.yaw = 0;
    } else {
        // Nod with head
        const nodProgress = (animationProgress - 0.75) * 4; // Adjust to a range of 0 to 1
        player.skin.rightArm.rotation.x = 0;
        player.skin.head.rotation.pitch = maxHeadNod * Math.sin(Math.PI * nodProgress);
    }
});

const open = (member, roles) => {
    const skin_api_uri = 'https://crafatar.com/skins/';

    const name = member.name;
    const role = member.role;
    const info = member.info;
    const uuid = member.uuid;

    const role_data = roles[role];
    const role_name = role_data ? role_data.name : 'Undefined';
    const role_color = role_data ? role_data.color : '#f07b0781';

    if (!window.closeListenerAdded) {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close();
        });
        window.closeListenerAdded = true;
    }

    let InfoContent = () => {
        const ref = useRef(null);

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                close();
            }
        };

        useEffect(() => {
            document.addEventListener('click', handleClickOutside, true);
            return () => {
                document.removeEventListener('click', handleClickOutside, true);
            };
        }, []);

        return (
            <div className="fixed z-10 flex h-full w-full min-w-[300px] justify-center bg-[#00000027] backdrop-blur-sm">
                <div ref={ref} className="relative m-auto flex max-h-[95vh] flex-col overflow-y-scroll rounded-md bg-[#46484c] p-5 pt-10 lg:flex-row">
                    <AiOutlineClose size={35} className="hover:text-gray absolute right-1 top-1 cursor-pointer  text-white" onClick={close} />
                    <div className="flex flex-col justify-center">
                        <div className="my-auto ml-5 flex flex-col">
                            <div className="flex font-bold">{name}</div>
                            <div
                                className="text-[13px]/[12px]"
                                style={{
                                    color: role_color
                                }}
                            >
                                {role_name}
                            </div>
                        </div>
                        <hr className="my-2 h-1 bg-[var(--white-color)]" />
                        <div className="ww-[50px] my-auto w-full">
                            <ReactSkinview3d
                                skinUrl={`${skin_api_uri}${uuid}`}
                                capeUrl=""
                                height="400"
                                width="250"
                                className="rounded-md bg-gray-400 bg-opacity-10 bg-clip-padding backdrop-blur-lg backdrop-filter"
                                onReady={({ viewer }) => {
                                    viewer.fov = 70;
                                    viewer.zoom = 0.7;
                                    // viewer.nameTag = new NameTagObject(name, { textStyle: role_color });
                                    viewer.animation = new IdleAnimation();
                                }}
                            />
                        </div>
                    </div>
                    <div className="ml-0 mt-5 flex max-w-[250px] whitespace-pre-wrap rounded-md bg-[#5d5e61] p-5 lg:ml-5 lg:mt-0">
                        <div className="my-auto text-center">{info}</div>
                    </div>
                </div>
            </div>
        );
    };

    let InfoRootElement = document.getElementById('info-root');
    if (!InfoRoot) InfoRoot = createRoot(InfoRootElement);
    InfoRoot.render(<InfoContent />);
};

const close = () => {
    if (!InfoRoot) return;
    InfoRoot.unmount();
    InfoRoot = undefined;
};

export default {
    open,
    close
};
