import { useState } from "react";
import { FaKeyboard } from "react-icons/fa";
import { GiArrowCursor } from "react-icons/gi";
import { PiMouseLeftClickFill } from "react-icons/pi";
import ColorButton from "./ColorButton";

interface ButtonGroupProps {
  onButtonGroupChange: (index: number) => void;
  onPurpleToggle: () => void;
}

const ButtonGroup = ({ onButtonGroupChange, onPurpleToggle  }: ButtonGroupProps) => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
    onButtonGroupChange(index); // 부모 컴포넌트로 상태 변경 알림
  };

  const buttons = [<FaKeyboard />, <PiMouseLeftClickFill />, <GiArrowCursor />];

  return (
    <div className="buttons-container border border-red-600 w-[80%]">
      <ColorButton onPurpleToggle={onPurpleToggle} />

      {buttons.map((button, index) => (
        <button
          key={index}
          className={`group button
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
