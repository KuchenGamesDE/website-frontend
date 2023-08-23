import { BiDownArrowCircle, BiUpArrowCircle } from 'react-icons/bi';

export default function AccordionLayout({ title, children, index, activeIndex, setActiveIndex }) {
    const handleSetIndex = (index) => (activeIndex !== index ? setActiveIndex(index) : setActiveIndex(0));

    return (
        <>
            <div
                onClick={() => handleSetIndex(index)}
                className="mt-2 flex w-[90vw] cursor-pointer justify-between rounded border-[1px] border-[#ffffff2d] bg-[#0d0f1881] px-5 py-3 backdrop-blur-md transition-all hover:bg-[#2b314e81]"
                style={{
                    borderRadius: activeIndex === index ? '5px 5px 0 0' : '5px'
                }}
            >
                <div className="flex w-full justify-center">
                    <div className="font-bold text-white">{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {activeIndex === index ? <BiUpArrowCircle className="h-6 w-6" /> : <BiDownArrowCircle className="h-6 w-6" />}
                </div>
            </div>

            {activeIndex === index && (
                <div
                    className="shadow-3xl mb-6 w-[90vw] cursor-default rounded-b-md border-[1px] border-t-0 border-[#ffffff2d] bg-[#555e8681] p-4 text-center text-white shadow-cyan-500/50 backdrop-blur-md"
                    dangerouslySetInnerHTML={{ __html: children }}
                >
                    {/* {children} */}
                </div>
            )}
        </>
    );
}
