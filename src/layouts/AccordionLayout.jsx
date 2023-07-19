import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

export default function AccordionLayout({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const handleSetIndex = (index) =>
    activeIndex !== index ? setActiveIndex(index) : setActiveIndex(0);

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className="w-[90vw] flex justify-between p-2 mt-2 rounded hover:bg-gray-600 bg-gray-700"
      >
        <div className="flex">
          <div className="text-white font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
            <BsFillArrowUpCircleFill className="w-8 h-8" />
          ) : (
            <BsFillArrowDownCircleFill className="w-8 h-8" />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <div
          className="w-[90vw] shadow-3xl text-white rounded bg-gray-500 shadow-cyan-500/50 p-4 mb-6"
          dangerouslySetInnerHTML={{ __html: children }}
        >
          {/* {children} */}
        </div>
      )}
    </>
  );
}
