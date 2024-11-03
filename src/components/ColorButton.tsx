import { useState } from "react";

interface ColorButtonProps {
  onPurpleToggle: () => void;
}

export default function ColorButton({ onPurpleToggle }: ColorButtonProps) {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        onPurpleToggle()
        setToggle(!toggle)
    }
    
  return (
    <div className="" onClick={handleToggle}>
      <div className={`color-toggle-bar
        ${toggle ? "bg-blue-500" : "bg-[#8258ab]"}`}>
        <div className={`color-toggle-circle 
            ${toggle ? "right-0 translate-x-1/2 bg-blue-200" : "left-0 -translate-x-1/2 bg-[#c8b7d8]"}`} />
      </div>
    </div>
  );
}
