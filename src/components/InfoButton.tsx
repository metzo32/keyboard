import { useState } from "react";
import { BiQuestionMark } from "react-icons/bi";
import Description from "./Description";

export default function InfoButton() {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const handleInfoMenu = () => {
    setShowInfo(true);
  };

  const closeInfoMenu = () => {
    setShowInfo(false);
  };

  return (
    <>
      <button className="info-button" onClick={handleInfoMenu}>
        <BiQuestionMark className="icons" />
      </button>
      {showInfo ? <Description onClose={closeInfoMenu} /> : <></>}
    </>
  );
}
