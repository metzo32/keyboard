// import './App.css'
import { useState, useMemo } from "react";
import "./styles/styles.css";
import keyboard from "./assets/svg/keyboard_base.svg";
import KeysLegacy from "./components/KeysOriginal";
import keyboardOff from "./assets/svg/keyboard_off.svg";
import shadow from "./assets/svg/shadow.svg"
import Keys from "./components/Keys";
import Background from "./components/Background";
import ModeButtons from "./components/ModeButtons";

function App() {
  const [lightOn, setLightOn] = useState<boolean>(false);
  const [typingOn, setTypingOn] = useState<boolean>(true);
  const [onClickOn, setOnClickOn] = useState<boolean>(false);
  const [mouseEnterOn, setMouseEnterOn] = useState<boolean>(false);
  const [knobValue, setKnobValue] = useState<number>(0);

  const handleKnobChange = (value: number) => {
    setKnobValue(value);
  };

  const handleButtonGroupChange = (index: number) => {
    if (index === 0) {
      setTypingOn(true);
      setOnClickOn(false);
      setMouseEnterOn(false);
    } else if (index === 1) {
      setTypingOn(false);
      setOnClickOn(true);
      setMouseEnterOn(false);
    } else if (index === 2) {
      setTypingOn(false);
      setOnClickOn(false);
      setMouseEnterOn(true);
    }
  };

  const lightHandler = () => {
    setLightOn(!lightOn);
  };

  const brightnessStyle = useMemo(() => {
    return { filter: lightOn ? `brightness(${100 - knobValue}%)` : "brightness(100%)" };
  }, [lightOn, knobValue]);

  

  return (
    <div className="background">
      <ModeButtons onButtonGroupChange={handleButtonGroupChange} />
      <div className="base">
        <img src={shadow} alt="shadow" className="base-shadow"/>
        <Keys
          onLightToggle={lightHandler}
          typingOn={typingOn}
          onClickOn={onClickOn}
          mouseEnterOn={mouseEnterOn}
          onKnobChange={handleKnobChange}
          onLightOn={lightOn}
        />
        {/* <KeysLegacy
         onLightToggle={lightHandler}
         typingOn={typingOn}
         onClickOn={onClickOn}
         mouseEnterOn={mouseEnterOn}
         onKnobChange={handleKnobChange}
         onLightOn={lightOn}/> */}
        <img
          src={keyboard}
          alt="keyboard"
          className="keyboard"
          style={brightnessStyle}
        />
        {lightOn ? (
          <Background />
        ) : (
          <>
          <img src={keyboardOff} alt="keyboard" className="off" />

          </>
        )}
      </div>
    </div>
  );
}

export default App;
