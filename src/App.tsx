// import './App.css'
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
import { BiPurchaseTag } from "react-icons/bi";

function App() {
  const [lightOn, setLightOn] = useState<boolean>(false);
  const [typingOn, setTypingOn] = useState<boolean>(true);
  const [onClickOn, setOnClickOn] = useState<boolean>(false);
  const [mouseEnterOn, setMouseEnterOn] = useState<boolean>(false);
  const [knobValue, setKnobValue] = useState<number>(0);
  const [purpleMode, setPurpleMode] = useState<boolean>(false);

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

  const brightnessStyle = useMemo(() => {
    return {
      filter: lightOn ? `brightness(${100 - knobValue}%)` : "brightness(100%)",
    };
  }, [lightOn, knobValue]);

  return (
    <div className="background">
      <div className="flex flex-col justify-between items-center border border-green-700 w-full aspect-[16/8]">
      <ModeButtons
        onButtonGroupChange={handleButtonGroupChange}
        onPurpleToggle={colorHandler}
      />
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

        {/* {purpleMode ? (
          <img
            src={purple}
            alt="keyboard"
            className="keyboard-purple"
            style={brightnessStyle}
          />
        ) : (
          null
        )} */}

        <img
          src={purple}
          alt="keyboard"
          className={`keyboard-purple ${purpleMode ? "" : "mask-color"}`}
          style={brightnessStyle}
        />

        <img
          src={keyboard}
          alt="keyboard"
          className="keyboard"
          style={brightnessStyle}
        />

        {typingOn ? (
          <img src={deactivate} alt="deactivate" className="deactivate" />
        ) : null}

        {lightOn ? (
          <MaskLED />
        ) : (
          <>
            <img src={keyboardOff} alt="keyboard" className="off" />
          </>
        )}
      </div>

      <div className="buttons-container">
        <a
          href="https://smartstore.naver.com/dfshop1/products/10311254657?NaPm=ct%3Dm30wxxdy%7Cci%3Dcheckout%7Ctr%3Drete%7Ctrx%3Dnull%7Chk%3Dcdd72202dec441c8eb2f76b854f5c95026826df8"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button group"
        >
          <BiPurchaseTag className="icons block group-hover:hidden" />
          <span className="hidden group-hover:block whitespace-nowrap lg:text-base text-sm">
            구매 링크
          </span>
        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
