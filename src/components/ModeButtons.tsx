import { useState } from "react";
import { FaKeyboard } from "react-icons/fa";
import { GiArrowCursor } from "react-icons/gi";
import { PiMouseLeftClickFill } from "react-icons/pi";
import ResponsiveKnob from "./ResponsiveKnob";

interface ButtonGroupProps {
  onButtonGroupChange: (index: number) => void;
  onLightOn: boolean;
  onKnobChange: (value: number) => void;
}

const ButtonGroup = ({ onButtonGroupChange }: ButtonGroupProps) => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
    onButtonGroupChange(index);
  };

  const buttons = [<FaKeyboard />, <PiMouseLeftClickFill />, <GiArrowCursor />];

  return (
    <div className="buttons-container">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`menu-button
            ${selectedButton === index ? "selected" : "unselected"}`}
          onClick={() => handleButtonClick(index)}
        >
          <span className="clickEffect">{button}</span>
          <div className="button-bg" />
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
