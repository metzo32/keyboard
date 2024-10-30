import { useRef, useEffect, useState } from "react";
import "../styles/styles.css";
import { Knob } from "primereact/knob";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import mainKeys, { functionKeys, AudioType } from "../assets/data/keyArray";

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

  // 오디오 객체 배열 생성 함수
  const createAudioArray = (audioSource: string, count: number) =>
    Array.from({ length: count }, () => new Audio(audioSource));

  // 오디오 맵 초기화
  const audioMap = useRef<{ [audioFileName in AudioType]: HTMLAudioElement[] }>(
    {
      A: createAudioArray(AAudio, 10),
      B: createAudioArray(BAudio, 10),
      C: createAudioArray(CAudio, 10),
      D: createAudioArray(DAudio, 10),
      E: createAudioArray(EAudio, 10),
    }
  );

  // 현재 재생할 복제본의 인덱스 저장
  const audioIndex = useRef<{ [audioFileName in AudioType]: number }>({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  });

  // 컴포넌트 마운트 시 오디오 파일 로드
  useEffect(() => {
    Object.values(audioMap.current).forEach((audioArray) =>
      audioArray.forEach((audio) => audio.load())
    );
    
  }, []);

  // 오디오 재생
  const playHandler = (audio: AudioType) => {
    const audioArray = audioMap.current[audio];
    const index = audioIndex.current[audio];

    // 현재 인덱스의 오디오 객체 재생
    const audioElement = audioArray[index];
    audioElement.currentTime = 0;
    audioElement.play();

    // 인덱스 순환
    audioIndex.current[audio] = (index + 1) % audioArray.length;
  };

  useEffect(() => {
    if (!typingOn) return;

    // code, audio가 매핑된 객체
    const keyMap = new Map<string, AudioType>(
      mainKeys.flat().map((key) => [key.code, key.audio])
    );
    
    function findAudioFile(audioFile: string) {
      return keyMap.get(audioFile)
    }

    // code, label이 매핑된 객체
    const codeToLabelMap = new Map<string, string>(
      mainKeys.flat().map((elem) => [elem.code, elem.label])
    );

    //눌렀을 때
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyName = event.key.toLowerCase();
      if (keyName === "capslock" && !event.getModifierState("CapsLock")) return;
      const audioFile = findAudioFile(keyName)

      if (audioFile) {
        event.preventDefault();
        playHandler(audioFile);

        // 해당하는 버튼 요소에 test 클래스 추가
        const buttonElement = document.querySelector(
          `button[data-code="${keyName}"]`
        );
        const spanElement =  document.querySelector(
          `span[data-code="${keyName}"]`
        );
        if (buttonElement) {
          buttonElement.classList.add("test");
          console.log(buttonElement, "추가");
        }
        if (spanElement) {
          spanElement.classList.add("test-span");

        }
      }
    }; 

    //뗄 때
    const handleKeyUp = (event: KeyboardEvent) => {
      const keyName = event.key.toLowerCase();
      //클래스 제거
      const buttonElement = document.querySelector(
        `button[data-code="${keyName}"]`
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
        <button
          onMouseEnter={mouseEnterOn ? () => playHandler("A") : undefined}
          onClick={onClickOn ? () => playHandler("A") : undefined}
          className={`esc ${!typingOn ? "hoverEffect" : ""}`}
        >
          <span className="key-span">ESC</span>
        </button>

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
            strokeWidth={5}
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
                <span
                  className="key-span"
                  data-code={label.code.toLowerCase()}
                >
                  {label.label}
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
