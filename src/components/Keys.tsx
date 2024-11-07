import { useEffect, useState } from "react";
import "../styles/styles.css";
import { Knob } from "primereact/knob";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import mainKeys, {
  functionKeys,
  escKey,
  AudioType,
} from "../assets/data/keyArray";
import useAudioPlayer from "../components/hooks/AudioPlay";

interface KeysProps {
  onLightToggle: () => void;
  typingOn: boolean;
  onClickOn: boolean;
  mouseEnterOn: boolean;
  onKnobChange: (value: number) => void;
  onLightOn: boolean;
  purpleMode: boolean;
}

export default function Keys({
  onLightToggle,
  typingOn,
  onClickOn,
  mouseEnterOn,
  onKnobChange,
  onLightOn,
  purpleMode,
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

      if (pressedKey === "capslock") {
        // CapsLock이 활성화된 상태가 아니라면 return
        if (!event.getModifierState("CapsLock")) return;

        const audioFile = findAudioFile(pressedKey);
        if (audioFile) {
          playHandler(audioFile); // CapsLock일 때도 오디오 재생
        }

        const buttonElement = document.querySelector(
          `button[data-code="capslock"]`
        );
        if (buttonElement) {
          buttonElement.classList.add("typed");

          setTimeout(() => {
            buttonElement.classList.remove("typed");
          }, 150);
        }
        return; // CapsLock의 경우 여기서 종료
      }

      const audioFile = findAudioFile(pressedKey);
      if (audioFile) {
        event.preventDefault();
        playHandler(audioFile);

        const locationSelector = pressedLocation
          ? `[data-location="${pressedLocation}"]`
          : "";
        const selectedKey = pressedKey === "\\" ? "\\\\" : pressedKey;

        const buttonElement = document.querySelector(
          `button[data-code="${selectedKey}"]${locationSelector}`
        );

        if (buttonElement) {
          buttonElement.classList.add("typed");
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

      const selectedKey = pressedKey === "\\" ? "\\\\" : pressedKey;

      const buttonElement = document.querySelector(
        `button[data-code="${selectedKey}"]${locationSelector}`
      );

      if (buttonElement) {
        buttonElement.classList.remove("typed");
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



  const [knobSize, setKnobSize] = useState(100); // 기본 Knob 크기 설정

  const handleKnobWidth = () => {
    if (window.innerWidth < 480) { //이하
      return 30;
    } else if (window.innerWidth < 650) { //custom-sm
      return 40;
    } else if (window.innerWidth < 768) { //sm
      return 50;
    } else if (window.innerWidth < 1024) { //md
      return 60;
    } else { //lg
      return 90;
    }
  };

  useEffect(() => {
    const updateKnobSize = () => {
      setKnobSize(handleKnobWidth());
      console.log("Knob size updated:", handleKnobWidth()); // 콘솔로 확인
    };

    // 초기 Knob 크기 설정
    updateKnobSize();

    // resize 이벤트 리스너 추가
    window.addEventListener("resize", updateKnobSize);

    // 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("resize", updateKnobSize);
  }, []);



  return (
    <div className="key-container">
      <div className="key-top-container">
        {escKey[0].map((esc) => (
          <button
            key={esc.code}
            onMouseEnter={
              mouseEnterOn ? () => playHandler(esc.audio) : undefined
            }
            onClick={onClickOn ? () => playHandler(esc.audio) : undefined}
            className={`esc 
                ${typingOn ? "cursor-default" : ""}
                ${
                  onClickOn
                    ? `clickEffect ${
                        purpleMode
                          ? "active:bg-custom-purple-50 hover:bg-custom-purple-20"
                          : "active:bg-custom-blue-50 hover:bg-custom-blue-20"
                      }`
                    : ""
                }
                ${
                  mouseEnterOn
                    ? `hoverEffect ${
                        purpleMode
                          ? " hover:bg-custom-purple-50"
                          : "hover:bg-custom-blue-50"
                      }`
                    : ""
                }
            `}
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
                  className={`quad-keys 
                    ${typingOn ? "cursor-default" : ""}
                    ${
                      onClickOn
                        ? `clickEffect ${
                            purpleMode
                              ? "active:bg-custom-purple-50 hover:bg-custom-purple-20"
                              : "active:bg-custom-blue-50 hover:bg-custom-blue-20"
                          }`
                        : ""
                    }
                    ${
                      mouseEnterOn
                        ? `hoverEffect ${
                            purpleMode
                              ? " hover:bg-custom-purple-50"
                              : "hover:bg-custom-blue-50"
                          }`
                        : ""
                    }
                  `}
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
            size={knobSize}
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
                className={`main-keys 
                  ${label.extraClass || ""}
                  ${
                    typingOn
                      ? `cursor-default ${
                          purpleMode
                            ? "bg-custom-purple-50"
                            : "bg-custom-blue-50"
                        }`
                      : ""
                  }
                  ${
                    onClickOn
                      ? `clickEffect ${
                          purpleMode
                            ? "active:bg-custom-purple-50 hover:bg-custom-purple-20"
                            : "active:bg-custom-blue-50 hover:bg-custom-blue-20"
                        }`
                      : ""
                  }
                  ${
                    mouseEnterOn
                      ? `hoverEffect ${
                          purpleMode
                            ? " hover:bg-custom-purple-50"
                            : "hover:bg-custom-blue-50"
                        }`
                      : ""
                  }
                `}
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
