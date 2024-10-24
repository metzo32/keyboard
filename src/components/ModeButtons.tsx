import React, { useState } from "react";
import { FaKeyboard } from "react-icons/fa";
import { GiArrowCursor } from "react-icons/gi";
import { PiMouseLeftClickFill } from "react-icons/pi";

const ButtonGroup: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const buttons = [<FaKeyboard />, <GiArrowCursor />, <PiMouseLeftClickFill />]; 

  return (
    <div className="w-[50%] flex flex-row justify-between mb-[0.5%]">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`button
            ${
              selectedButton === index
                ? "selected"
                : "unselected"
            }`}
          onClick={() => handleButtonClick(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
