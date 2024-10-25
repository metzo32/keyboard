import { useState } from "react";
import { FaKeyboard } from "react-icons/fa";
import { GiArrowCursor } from "react-icons/gi";
import { PiMouseLeftClickFill } from "react-icons/pi";

interface ButtonGroupProps {
  onButtonGroupChange: (index: number) => void;
}

const ButtonGroup = ({ onButtonGroupChange }: ButtonGroupProps) => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
    onButtonGroupChange(index); // 부모 컴포넌트로 상태 변경 알림
  };

  const buttons = [<FaKeyboard />, <PiMouseLeftClickFill/>,  <GiArrowCursor />];

  return (
    <div className="w-[50%] flex flex-row justify-between mb-[0.5%]">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`button
            ${selectedButton === index ? "selected" : "unselected"}`}
          onClick={() => handleButtonClick(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
