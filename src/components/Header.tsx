import ColorButton from "./ColorButton";
import InfoButton from "./InfoButton";

interface HeaderProps {
  onPurpleToggle: () => void;
  onInfoToggle: () => void;
}

export default function Header({ onPurpleToggle, onInfoToggle }: HeaderProps) {
  return (
    <div className="header-container">
      <ColorButton onPurpleToggle={onPurpleToggle} />
      <InfoButton onInfoToggle={onInfoToggle} />
    </div>
  );
}
