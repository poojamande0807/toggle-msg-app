import React, { useReducer } from "react";

const initialState = { isVisible: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { isVisible: !state.isVisible };

    default:
      return state;
  }
};

function ToggleMessage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}>
        Toggle Message
      </button>

      {state.isVisible && <p>Hello, World!</p>}
    </div>
  );
}

export default ToggleMessage;
