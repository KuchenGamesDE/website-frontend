import { useState } from "react";

import data from "./FAQData"; // TODO: fetch from own API later and run a useEffect Hook to fetch data

import AccordionLayout from "../../layouts/AccordionLayout";

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      {data.map((faqElement, i) => {
        return (
          <AccordionLayout
            key={i + 1}
            title={faqElement.title}
            index={i + 1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            {faqElement.content.replace("<script", "").replace("</script", "")}
          </AccordionLayout>
        );
      })}
    </div>
  );
}
