import { BiQuestionMark } from "react-icons/bi";

interface InfoButtonProps {
  onInfoToggle: () => void;
}

export default function InfoButton({ onInfoToggle }:InfoButtonProps) {
  return (
    <>
      <button className="info-button" onClick={onInfoToggle}>
        <BiQuestionMark className="icons" />
      </button>
    </>
  );
}
