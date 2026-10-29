import { useState } from "react";

const accordionStyles = {
  padding: "4px",
  backgroundColor: "#d5f1ff",
  header: {
    display: "flex",
    backgroundColor: "teal",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
  },
  body: {
    padding: "16px",
    backgroundColor: "yellow",
    marginBottom: "4px",
  },
};

interface AccordianProps {
  series: string;
  activeAccordianId: string | null;
  toggleAccordian: (id: string) => void;
}

export default function Accordians() {
  const [activeAccordianId, setActiveAccordianId] = useState<string | null>(null);

  function toggleAccordian(id: string) {
    setActiveAccordianId((curId) => (curId === id ? null : id));
  }
  return (
    <div style={accordionStyles}>
      {Array.from({ length: 3 }, (_, index) => (
        <Accordian
          key={index}
          series={index.toString()}
          activeAccordianId={activeAccordianId}
          toggleAccordian={toggleAccordian}
        />
      ))}
    </div>
  );
}

function Accordian({ series, activeAccordianId, toggleAccordian }: AccordianProps) {
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      {/* Header 1*/}
      <div style={accordionStyles.header}>
        <p>Header 1</p>
        <button onClick={() => toggleAccordian(series)}>Show</button>
      </div>
      {/* Body */}
      {activeAccordianId === series && (
        <div id="1" style={accordionStyles.body}>
          Body 1: Lorem ipsum dollar sit amet
          <button onClick={() => setRating((cur) => cur + 1)}>Count</button>
          <p>Rating:{rating}</p>
        </div>
      )}
    </>
  );
}
