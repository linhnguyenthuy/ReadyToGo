import { useState } from "react";

function Buttons({ state, setState }) {
  return (
    <>
      <div>
        <button
          className={state ? "active" : "inactive"}
          onClick={() => {
            setState(true);
          }}
        >
          ON
        </button>
        <button
          className={!state ? "active" : "inactive"}
          onClick={() => {
            setState(false);
          }}
        >
          OFF
        </button>
      </div>
    </>
  );
}
export default Buttons;
