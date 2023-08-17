import { BiDownArrowCircle, BiUpArrowCircle } from 'react-icons/bi';

export default function AccordionLayout({ title, children, index, activeIndex, setActiveIndex }) {
    const handleSetIndex = (index) => (activeIndex !== index ? setActiveIndex(index) : setActiveIndex(0));

    return (
        <>
            <div
                onClick={() => handleSetIndex(index)}
                className="cursor-pointer border-[#ffffff2d] border-[1px] transition-all w-[90vw] flex justify-between py-3 px-5 mt-2 rounded hover:bg-[#2b314e81] bg-[#0d0f1881] backdrop-blur-md"
                style={{
                    borderRadius: activeIndex === index ? '5px 5px 0 0' : '5px'
                }}
            >
                <div className="flex w-full justify-center">
                    <div className="text-white font-bold">{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {activeIndex === index ? <BiUpArrowCircle className="w-6 h-6" /> : <BiDownArrowCircle className="w-6 h-6" />}
                </div>
            </div>

            {activeIndex === index && (
                <div
                    className="cursor-default border-[#ffffff2d] border-[1px] border-t-0 w-[90vw] shadow-3xl text-center text-white rounded-b-md bg-[#555e8681] shadow-cyan-500/50 p-4 mb-6 backdrop-blur-md"
                    dangerouslySetInnerHTML={{ __html: children }}
                >
                    {/* {children} */}
                </div>
            )}
        </>
    );
}
