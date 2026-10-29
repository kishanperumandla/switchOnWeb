import { useState } from "react";

// Styles START
const dateEstimator = {
  padding: "1rem",
  backgroundColor: "#fffd74",
};
const controllerContainer = {
  display: "flex",
  aligItems: "center",
  // gap: "4px",
};
// Styles END

export default function Slider() {
  const stepCount = 5;
  const [stepperVal, setStepperVal] = useState<number>(0);

  const today = new Date();
  today.setDate(today.getDate() + stepperVal);
  const futureDate = today.toDateString();

  function handleInc() {
    setStepperVal((cur) => cur + stepCount);
  }

  function handleDec() {
    setStepperVal((cur) => Math.max(0, cur - stepCount));
  }

  return (
    <div style={dateEstimator}>
      <h2>Date Estimator</h2>
      <input
        value={stepperVal}
        type="range"
        min="0"
        max="100"
        step={stepCount}
        onChange={(e) => setStepperVal(Number(e.currentTarget.value))}
      />

      <div style={controllerContainer}>
        <button className="btn-secondary" onClick={handleDec}>
          -
        </button>

        <input
          className="form-input"
          type="number"
          min="0"
          max="100"
          value={stepperVal}
          onChange={(e) => setStepperVal(Number(e.currentTarget.value))}
        />

        <button className="btn-secondary" onClick={handleInc}>
          +
        </button>
      </div>

      <h3>Future Date: {futureDate}</h3>
    </div>
  );
}
