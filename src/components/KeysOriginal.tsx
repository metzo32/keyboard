import { useEffect, useState } from "react";
import "../styles/styles.css";
import { Knob } from "primereact/knob";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import mainKeys, { functionKeys, escKey, AudioType } from "../assets/data/keyArray";
import useAudioPlayer from "../components/hooks/AudioPlay";

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
 

  // const createAudioArray = (audioSource: string, count: number) =>
  //   Array.from({ length: count }, () => new Audio(audioSource));

  // const audioMap = useRef<{ [audioFileName in AudioType]: HTMLAudioElement[] }>({
  //   A: createAudioArray(AAudio, 10),
  //   B: createAudioArray(BAudio, 10),
  //   C: createAudioArray(CAudio, 10),
  //   D: createAudioArray(DAudio, 10),
  //   E: createAudioArray(EAudio, 10),
  // });

  // useEffect(() => {
  //   Object.values(audioMap.current).forEach((audioArray) =>
  //     audioArray.forEach((audio) => audio.load())
  //   );
  // }, []);

  // const audioIndex = useRef<{ [audioFileName in AudioType]: number }>({
  //   A: 0,
  //   B: 0,
  //   C: 0,
  //   D: 0,
  //   E: 0,
  // });

  // const playHandler = (audio: AudioType) => {
  //   const audioArray = audioMap.current[audio];
  //   const index = audioIndex.current[audio];

  //   const audioElement = audioArray[index];
  //   audioElement.currentTime = 0;
  //   audioElement.play();

  //   audioIndex.current[audio] = (index + 1) % audioArray.length;
  // };

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

      if (pressedKey === "capslock" && !event.getModifierState("CapsLock")) return;
      const audioFile = findAudioFile(pressedKey);

      if (audioFile) {
        event.preventDefault();
        playHandler(audioFile);

        const buttonElement = document.querySelector(
          `button[data-code="${pressedKey}"]`
        );

        if (buttonElement) {
          buttonElement.classList.add("test");
          console.log(buttonElement, "추가");
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const pressedKey = event.key.toLowerCase();
      const buttonElement = document.querySelector(
        `button[data-code="${pressedKey}"]`
      );
      if (buttonElement) {
        buttonElement.classList.remove("test");
        console.log("test 클래스가 제거되었습니다.");
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
            onMouseEnter={mouseEnterOn ? () => playHandler(esc.audio) : undefined}
            onClick={onClickOn ? () => playHandler(esc.audio) : undefined}
            className={`esc ${!typingOn ? "hoverEffect" : ""}`}
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
                  className={`quad-keys ${!typingOn ? "hoverEffect" : ""}`}
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
          <span className="key-span">LED</span>
        </button>

        {onLightOn && (
          <Knob
            value={knobValue}
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
                  !typingOn ? "hoverEffect" : ""
                }`}
                key={labelIndex}
                onMouseEnter={
                  mouseEnterOn ? () => playHandler(label.audio) : undefined
                }
                onClick={onClickOn ? () => playHandler(label.audio) : undefined}
                data-code={label.code.toLowerCase()}
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