import { useState } from "react";
import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <>
      <div>
        <button
          className={switch1 ? "active" : "inactive"}
          onClick={() => {
            setSwitch1(true);
          }}
        >
          ON
        </button>
        <button
          className={!switch1 ? "active" : "inactive"}
          onClick={() => {
            setSwitch1(false);
          }}
        >
          OFF
        </button>
      </div>
      <div>
        <button
          className={switch2 ? "active" : "inactive"}
          onClick={() => {
            setSwitch2(true);
          }}
        >
          ON
        </button>
        <button
          className={!switch2 ? "active" : "inactive"}
          onClick={() => {
            setSwitch2(false);
          }}
        >
          OFF
        </button>
      </div>
      <div>
        <button
          className={switch3 ? "active" : "inactive"}
          onClick={() => {
            setSwitch3(true);
          }}
        >
          ON
        </button>
        <button
          className={!switch3 ? "active" : "inactive"}
          onClick={() => {
            setSwitch3(false);
          }}
        >
          OFF
        </button>
        {switch1 && switch2 && switch3 ? (
          <p
            style={{
              backgroundColor: `blue`,
              color: "white",
              height: `50px`,
              width: `70px`,
            }}
          >
            GO
          </p>
        ) : (
          <p
            style={{
              backgroundColor: "red",
              color: "white",
              height: `50px`,
              width: `70px`,
            }}
          >
            {" "}
            NO WAY
          </p>
        )}
      </div>
    </>
  );
}

export default App;
