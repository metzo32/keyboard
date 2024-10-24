import "../styles/styles.css";
import mainKeys from "../assets/data/keyArray";
import { functionKeys } from "../assets/data/keyArray";
import { AudioType } from "../assets/data/keyArray";

import AAudio from "../assets/audio/A.mp3";
import BAudio from "../assets/audio/B.mp3";
import CAudio from "../assets/audio/C.mp3";
import DAudio from "../assets/audio/D.mp3";
import EAudio from "../assets/audio/E.mp3";

interface KeysProps {
  onLightToggle: () => void;
  typingOn: boolean;
  onClickOn: boolean;
  mouseEnterOn: boolean;
}

export default function Keys({
  onLightToggle,
  typingOn,
  onClickOn,
  mouseEnterOn,
}: KeysProps) {
  const audioMap: { [key in AudioType]: string } = {
    A: AAudio,
    B: BAudio,
    C: CAudio,
    D: DAudio,
    E: EAudio,
  };

  const playHandler = (audio: AudioType) => {
    const audioFile = audioMap[audio];
    const audioElement = new Audio(audioFile);
    audioElement.play();
  };

  return (
    <div className="key-container">
      <div className="quad-key-row">
        <button
          onMouseEnter={mouseEnterOn ? () => playHandler("A") : undefined}
          onClick={onClickOn ? () => playHandler("A") : undefined}
          className="esc"
        >
          <span>ESC</span>
        </button>

        <div className="quad-container">
          {functionKeys.map((row, rowIndex) => (
            <div className="quad-row" key={rowIndex}>
              {row.map((key) => (
                <button
                  className="quad-keys"
                  key={key}
                  onMouseEnter={
                    mouseEnterOn ? () => playHandler("A") : undefined
                  }
                  onClick={onClickOn ? () => playHandler("A") : undefined}
                >
                  <span>{key}</span>
                </button>
              ))}
            </div>
          ))}
        </div>

        <button onClick={onLightToggle} className="wheel">
          <span>LED</span>
        </button>
      </div>

      <div className="key-main-container">
        {mainKeys.map((row, rowIndex) => (
          <div className="key-main-row" key={rowIndex}>
            {row.map((label, labelIndex) => (
              <button
                onMouseEnter={
                  mouseEnterOn ? () => playHandler(label.audio) : undefined
                }
                onClick={onClickOn ? () => playHandler(label.audio) : undefined}
                className={`main-keys ${label.extraClass || ""}`}
                key={labelIndex}
              >
                <span>{label.label}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
