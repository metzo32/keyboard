import { useRef, useEffect } from "react";
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

export default function Keys({ onLightToggle, typingOn, onClickOn, mouseEnterOn }: KeysProps) {
  
  // const audioMap = useRef<{ [key in AudioType]: HTMLAudioElement[] }>({
  //   A: [new Audio(AAudio), new Audio(AAudio), new Audio(AAudio), new Audio(AAudio), new Audio(AAudio)],
  //   B: [new Audio(BAudio), new Audio(BAudio), new Audio(BAudio), new Audio(BAudio), new Audio(BAudio)],
  //   C: [new Audio(CAudio), new Audio(CAudio), new Audio(CAudio), new Audio(CAudio), new Audio(CAudio)],
  //   D: [new Audio(DAudio), new Audio(DAudio), new Audio(DAudio), new Audio(DAudio), new Audio(DAudio)],
  //   E: [new Audio(EAudio), new Audio(EAudio), new Audio(EAudio), new Audio(EAudio), new Audio(EAudio)],
  // });

  const createAudioArray = (audioSrc: string, count: number) => 
    Array.from({ length: count }, () => new Audio(audioSrc));
  
  const audioMap = useRef<{ [key in AudioType]: HTMLAudioElement[] }>({
    A: createAudioArray(AAudio, 7),
    B: createAudioArray(BAudio, 7),
    C: createAudioArray(CAudio, 7),
    D: createAudioArray(DAudio, 7),
    E: createAudioArray(EAudio, 7),
  });

  // 현재 재생할 복제본의 인덱스를 저장할 객체
  const audioIndex = useRef<{ [key in AudioType]: number }>({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  });

  // 미리 오디오 파일을 로드
  useEffect(() => {
    Object.values(audioMap.current).forEach((audioArray) =>
      audioArray.forEach((audio) => audio.load())
    );
  }, []);

  const playHandler = (audio: AudioType) => {
    const audioArray = audioMap.current[audio];
    const index = audioIndex.current[audio];
    
    // 현재 인덱스에 해당하는 오디오 객체를 재생
    const audioElement = audioArray[index];
    audioElement.currentTime = 0; // 초기화
    audioElement.play();

    // 다음 재생을 위해 인덱스 순환
    audioIndex.current[audio] = (index + 1) % audioArray.length;
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
