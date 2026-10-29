import { useReducer } from "react";

interface State {
  count: number;
  error: string;
}
interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return state.count >= 5
        ? { ...state, error: "❌ You cannot INCREASE more than 5" }
        : { ...state, count: state.count + 1, error: "" };
    case "decrement":
      return state.count <= 0
        ? { ...state, error: "🔴 You cannot DECREASE less than 0" }
        : { ...state, count: state.count - 1, error: "" };
    default:
      return state;
  }
}

export default function TestComp() {
  const [state, dispactch] = useReducer(reducer, { count: 0, error: "" });

  //   console.log(state);

  return (
    <div>
      <h2>Test</h2>
      {state.error && <p>{state.error}</p>}
      <p>Count:{state.count}</p>
      <button className="btn-secondary" onClick={() => dispactch({ type: "decrement" })}>
        -
      </button>
      <button className="btn-secondary" onClick={() => dispactch({ type: "increment" })}>
        +
      </button>
    </div>
  );
}
