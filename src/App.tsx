// import './App.css'
import { useState } from "react";
import "./styles/styles.css";
import keyboard from "./assets/svg/keyboard_base.svg.svg";
import keyboardOn from "./assets/svg/keyboard_on.svg";
import keyboardOff from "./assets/svg/keyboard_off.svg";
import Keys from "./components/Keys";
import Background from "./components/Background";
import ModeButtons from "./components/ModeButtons";

function App() {
  const [lightOn, setLightOn] = useState<boolean>(false);

  const lightHandler = () => {
    setLightOn(!lightOn);
  };

  return (
    <div className="background">
      {/* <Background /> */}
      <ModeButtons />
      <div className="base">
        <Keys onLightToggle={lightHandler} />
        <img src={keyboard} alt="keyboard" className="w-full h-auto" />
        {lightOn ? (
          <img src={keyboardOn} alt="keyboard" className="on" />
        ) : (
          <img src={keyboardOff} alt="keyboard" className="off" />
        )}
      </div>
    </div>
  );
}

export default App;
