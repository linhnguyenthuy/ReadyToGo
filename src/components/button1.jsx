import React, { useState } from "react";

function OnClick({ onClickStates, setOnClickStates }) {
  const [buttonColor1, setButtonColor1] = useState("white");
  const [buttonColor2, setButtonColor2] = useState("blue");

  const handleClick1 = () => {
    setButtonColor1("blue");
    setButtonColor2("white");
  };

  const handleClick2 = () => {
    setButtonColor1("white");
    setButtonColor2("blue");
  };

  return (
    <div>
      <button style={{ backgroundColor: buttonColor1 }} onClick={handleClick1}>
        ON
      </button>

      <button style={{ backgroundColor: buttonColor2 }} onClick={handleClick2}>
        OFF
      </button>
    </div>
  );
}

export default OnClick;
