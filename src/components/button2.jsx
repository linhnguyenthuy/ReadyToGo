import React, { useState, useContext, useEffect } from "react";

function Start() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonText, setButtonText] = useState("No way");

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }}>{buttonText}</button>
    </div>
  );
}

export default Start;
