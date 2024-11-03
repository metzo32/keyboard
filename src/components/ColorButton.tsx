interface ColorButtonProps {
    onPurpleToggle: () => void;
  }

export default function ColorButton({onPurpleToggle}: ColorButtonProps) {
  return (
    <button className="color-button" onClick={onPurpleToggle}>
     색바꾸기
    </button>
  );
}
