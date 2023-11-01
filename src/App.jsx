import { useState } from "react";
import "./App.css";

import OnClick from "./components/button1";
import Start from "./components/button2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <OnClick />
      <OnClick />
      <OnClick />
      <Start />
    </>
  );
}

export default App;
