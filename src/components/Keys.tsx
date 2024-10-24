import "../styles/styles.css";
import QuadKeys from "./QuadKeys";
import mainKeys from "../assets/data/keyArray";
import { AudioType } from "../assets/data/keyArray";

interface KeysProps {
  onLightToggle: () => void;
}

//A: 일반, B: 앤터, C:윈도우 D:탭 E: 스페이스

export default function Keys({ onLightToggle }: KeysProps) {

  const audioMap: { [key in AudioType]: string } = {
    A: '../assets/audio/A.mp3',
    B: '../assets/audio/B.mp3',
    C: '../assets/audio/C.mp3',
    D: '../assets/audio/D.mp3',
    E: '../assets/audio/E.mp3',
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
        // onClick={() => playHandler(audio)} 
        className="esc">
          <span>ESC</span>
        </button>
        <QuadKeys />
        <button onClick={onLightToggle} className="wheel">
          <span>LED</span>
        </button>
      </div>

      <div className="key-main-container">
        {mainKeys.map((row, rowIndex) => (
          <div className="key-main-row" key={rowIndex}>
            {row.map((label, labelIndex) => (
              <button
                onClick={() => playHandler(label.audio)}
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
