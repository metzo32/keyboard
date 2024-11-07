import { useState, useMemo } from "react";
import "./styles/styles.css";
import keyboard from "./assets/svg/keyboard_base.svg";
import purple from "./assets/svg/keyboard_purple.svg";
import keyboardOff from "./assets/svg/keyboard_off.svg";
import shadow from "./assets/svg/shadow.svg";
import deactivate from "./assets/svg/deactivate.svg";
import Keys from "./components/Keys";
import MaskLED from "./components/MaskLED";
import ModeButtons from "./components/ModeButtons";
import Description from "./components/Description";
import LinkButton from "./components/LinkButton";
import Header from "./components/Header";

function App() {
  const [lightOn, setLightOn] = useState<boolean>(false);
  const [typingOn, setTypingOn] = useState<boolean>(true);
  const [onClickOn, setOnClickOn] = useState<boolean>(false);
  const [mouseEnterOn, setMouseEnterOn] = useState<boolean>(false);
  const [knobValue, setKnobValue] = useState<number>(0);
  const [purpleMode, setPurpleMode] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);

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

  const colorHandler = () => {
    setPurpleMode(!purpleMode);
  };

  const handleInfoMenu = () => {
    setShowInfo(true);
  };

  const closeInfoMenu = () => {
    setShowInfo(false);
  };

  const brightnessStyle = useMemo(() => {
    return {
      filter: lightOn ? `brightness(${100 - knobValue}%)` : "brightness(100%)",
    };
  }, [lightOn, knobValue]);

  return (
    <>
      <div className="background">

        <Header onPurpleToggle={colorHandler} onInfoToggle={handleInfoMenu} />


        <ModeButtons onButtonGroupChange={handleButtonGroupChange} />
        
        <div className="base">
          <img src={shadow} alt="shadow" className="base-shadow" />

          <Keys
            onLightToggle={lightHandler}
            typingOn={typingOn}
            onClickOn={onClickOn}
            mouseEnterOn={mouseEnterOn}
            onKnobChange={handleKnobChange}
            onLightOn={lightOn}
            purpleMode={purpleMode}
          />

          <img
            src={purple}
            alt="keyboard"
            className={`keyboard-purple ${purpleMode ? "visible" : ""}`}
            style={brightnessStyle}
          />

          <img
            src={keyboard}
            alt="keyboard"
            className="keyboard-blue"
            style={brightnessStyle}
          />

          {typingOn ? (
            <img src={deactivate} alt="deactivate" className="deactivate" />
          ) : null}

          {lightOn ? (
            <MaskLED />
          ) : (
            <img src={keyboardOff} alt="keyboard" className="off" />
          )}

        </div>
          <LinkButton />
        {showInfo ? <Description onClose={closeInfoMenu} /> : null}
      </div>
    </>
  );
}

export default App;
