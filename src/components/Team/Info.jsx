import { createRoot } from 'react-dom/client';

var InfoRoot = undefined

const open = (member, roles) => {
    const skin_api_uri = "https://mc-heads.net/body/"

    const name = member.name
    const role = member.role
    const info = member.info
    const uuid = member.uuid

    const role_data = roles[role]
    const role_name = role_data ? role_data.name : "Undefined"
    const role_color = role_data ? role_data.color : "#f07b0781"

    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) close()
    })

    let InfoContent = () => {
        return (
            <div
                className="min-w-[300px] fixed flex w-full h-full bg-[#00000027] backdrop-blur-sm z-10 justify-center"
                onClick={close}
            >
                <div
                    className="bg-[#46484c] m-auto p-5 rounded-md flex lg:flex-row flex-col"
                >
                    <div
                        className='flex flex-row justify-center'
                    >
                        <div
                            className='w-[50px] my-auto'
                        >
                            <img src={`${skin_api_uri}${uuid}`} alt="skin" />
                        </div>
                        <div
                            className='flex flex-col ml-5 my-auto'
                        >
                            <div
                                className='flex font-bold'
                            >
                                {name}
                            </div>
                            <div
                                className='text-[13px]/[12px]'
                                style={{
                                    color: role_color
                                }}
                            >
                                {role_name}
                            </div>
                        </div>
                    </div>
                    <div
                        className='bg-[#5d5e61] ml-0 lg:ml-5 p-5 lg:mt-0 mt-5 rounded-md max-w-[250px] flex whitespace-pre-wrap'
                    >
                        <div
                            className='text-center my-auto'
                        >
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    let InfoRootElement = document.getElementById('info-root');
    InfoRoot = createRoot(InfoRootElement)

    let Info = InfoRoot.render(<InfoContent />)
    Info = Info
}

const close = () => {
    InfoRoot.unmount();
}

export default {
    open,
    close
}