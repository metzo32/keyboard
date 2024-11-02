import { useEffect, useState } from "react";
import "../styles/styles.css";
import { Knob } from "primereact/knob";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import mainKeys, {
  functionKeys,
  escKey,
  AudioType,
} from "../assets/data/keyArray";
import useAudioPlayer from "../components/hooks/AudioPlay"

interface KeysProps {
  onLightToggle: () => void;
  typingOn: boolean;
  onClickOn: boolean;
  mouseEnterOn: boolean;
  onKnobChange: (value: number) => void;
  onLightOn: boolean;
}

export default function Keys({
  onLightToggle,
  typingOn,
  onClickOn,
  mouseEnterOn,
  onKnobChange,
  onLightOn,
}: KeysProps) {

  const [knobValue, setKnobValue] = useState<number>(0);
  const { playHandler } = useAudioPlayer();
 
  useEffect(() => {
    if (!typingOn) return;

    const keyMap = new Map<string, AudioType>(
      mainKeys.flat().map((key) => [key.code, key.audio])
    );

    function findAudioFile(audioFile: string) {
      return keyMap.get(audioFile);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKey = event.key.toLowerCase();
      const pressedLocation =
        event.location === 1 ? "L" : event.location === 2 ? "R" : "";

      if (pressedKey === "capslock" && !event.getModifierState("CapsLock"))
        return;
      const audioFile = findAudioFile(pressedKey);

      if (audioFile) {
        event.preventDefault();
        playHandler(audioFile);

        // location이 있는 경우 왼쪽("L") 또는 오른쪽("R")으로 매핑
        const locationSelector = pressedLocation
          ? `[data-location="${pressedLocation}"]`
          : "";

        const buttonElement = document.querySelector(
          `button[data-code="${pressedKey}"]${locationSelector}`
        );

        if (buttonElement) {
          buttonElement.classList.add("test");
          console.log(buttonElement, "추가");
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const pressedKey = event.key.toLowerCase();
      const pressedLocation =
        event.location === 1 ? "L" : event.location === 2 ? "R" : "";

      const locationSelector = pressedLocation
        ? `[data-location="${pressedLocation}"]`
        : "";
      const buttonElement = document.querySelector(
        `button[data-code="${pressedKey}"]${locationSelector}`
      );

      if (buttonElement) {
        buttonElement.classList.remove("test");
        console.log(buttonElement, "제거");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [typingOn]);

  const handleKnobChange = (e: { value: number }) => {
    setKnobValue(e.value);
    onKnobChange(e.value);
  };

  return (
    <div className="key-container">
      <div className="quad-key-row">
        {escKey[0].map((esc) => (
          <button
            key={esc.code}
            onMouseEnter={
              mouseEnterOn ? () => playHandler(esc.audio) : undefined
            }
            onClick={onClickOn ? () => playHandler(esc.audio) : undefined}
            className={`esc ${mouseEnterOn ? "hoverEffect" : ""}`}
            data-code={esc.code.toLowerCase()}
          >
            <span className="key-span">{esc.label}</span>
          </button>
        ))}

        <div className="quad-container">
          {functionKeys.map((row, rowIndex) => (
            <div className="quad-row" key={rowIndex}>
              {row.map((label, labelIndex) => (
                <button
                  className={`quad-keys ${mouseEnterOn ? "hoverEffect" : ""}`}
                  key={labelIndex}
                  onMouseEnter={
                    mouseEnterOn ? () => playHandler("A") : undefined
                  }
                  onClick={onClickOn ? () => playHandler("A") : undefined}
                  data-code={label.code.toLowerCase()}
                >
                  <span className="key-span">{label.label}</span>
                </button>
              ))}
            </div>
          ))}
        </div>

        <button onClick={onLightToggle} className="wheel">
          <span>LED</span>
        </button>

        {onLightOn && (
          <Knob
            value={knobValue}
            width={2}
            min={0}
            max={70}
            showValue={false}
            onChange={handleKnobChange}
            strokeWidth={8}
            className={`knob ${onLightOn ? "knob-show" : "knob-hide"}`}
          />
        )}
      </div>

      <div className="key-main-container">
        {mainKeys.map((row, rowIndex) => (
          <div className="key-main-row" key={rowIndex}>
            {row.map((label, labelIndex) => (
              <button
                className={`main-keys ${label.extraClass || ""} ${
                  mouseEnterOn ? "hoverEffect" : ""
                }`}
                key={labelIndex}
                onMouseEnter={
                  mouseEnterOn ? () => playHandler(label.audio) : undefined
                }
                onClick={onClickOn ? () => playHandler(label.audio) : undefined}
                data-code={label.code.toLowerCase()}
                data-location={label.location || ""}
              >
                <span className="key-span">{label.label}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
