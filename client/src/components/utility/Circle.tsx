import { useState } from "react";

const outlineCircle = {
  width: "16px",
  height: "16px",
  border: " 2px solid red",
  borderRadius: "50%",
  display: "inline-block",
  cursor: "pointer",
};

const fullCircle = {
  width: "16px",
  height: "16px",
  backgroundColor: "red",
  borderRadius: "50%",
  display: "inline-block",
  cursor: "pointer",
};
export function CircleOutline() {
  const outlineCircle = {
    width: "16px",
    height: "16px",
    border: " 2px solid red",
    borderRadius: "50%",
    display: "inline-block",
  };

  return <span style={outlineCircle}></span>;
}

export function CircleFull() {
  const fullCircle = {
    width: "16px",
    height: "16px",
    backgroundColor: "red",
    borderRadius: "50%",
    display: "inline-block",
  };

  return <span style={fullCircle}></span>;
}

export default function RatingUi() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const totalLength: number = 5;

  function onHover(index: number) {
    setSelectedIndex(index);
    console.log("hover");
  }
  function onLeave() {
    setSelectedIndex(0);
  }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {Array.from({ length: selectedIndex }, (_, index) => (
        <span key={index} style={fullCircle}></span>
      ))}

      {Array.from({ length: totalLength - (selectedIndex + 1) }, (_, index) => (
        <span
          key={index}
          style={outlineCircle}
          onMouseOver={() => onHover(index)}
          onMouseLeave={onLeave}
        ></span>
      ))}
    </div>
  );
}

//   <CircleFull onMouseHover={(e)=>onHover(e)}  /> */
