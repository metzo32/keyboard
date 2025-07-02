import { useEffect } from "react";
import mainKeys, {
  functionKeys,
  escKey,
  AudioType,
  specialKeyMap,
} from "../assets/data/keyArray";
import useAudioPlayer from "./hooks/useAudioPlayer";

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
  typingOn, // 타이핑 모드
  onClickOn, // 클릭 모드
  mouseEnterOn, // 호버 모드
  purpleMode,
}: KeysProps) {
  const { playHandler } = useAudioPlayer();

  useEffect(() => {
    if (!typingOn) return;

    const keyMap = new Map<string, AudioType>(
      mainKeys.flat().map((key) => [key.code, key.audio])
    );

    //알맞은 오디오 파일 찾기
    function findAudioFile(pressedKey: string) { // pressedKey를 추적하기
      return keyMap.get(pressedKey);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      let pressedKey = event.key; // 원본 키 값
      pressedKey = event.code.toLowerCase(); // 한영키 무시하고 원래 키값만 받기

      //좌우키
      const pressedLocation =
        event.location === 1 ? "L" : event.location === 2 ? "R" : "";

      // 특수문자 매핑 적용
      if (specialKeyMap[pressedKey]) {
        pressedKey = specialKeyMap[pressedKey];
      }

      //대소문자 판별 없애기
      if (/^[A-Z]$/.test(pressedKey)) {
        pressedKey = pressedKey.toLowerCase();
      }

      //capslock 케이스 처리
      if (pressedKey === "capslock") {
        // CapsLock이 활성화된 상태가 아니라면 return
        if (!event.getModifierState("CapsLock")) return;

        const audioFile = findAudioFile(pressedKey);
        if (audioFile) {
          playHandler(audioFile); // CapsLock일 때도 오디오 재생
        }

        //토글형 capslock 버튼 이벤트 따로 처리
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

        const locationSelector =
          pressedLocation && `[data-location="${pressedLocation}"]`;

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
      let pressedKey = event.key; // 원본 키 값
      pressedKey = event.code.toLowerCase(); // 한영키 무시하고 원래 키값만 받기

      const pressedLocation =
        event.location === 1 ? "L" : event.location === 2 ? "R" : "";

      // 특수문자 매핑 적용
      if (specialKeyMap[pressedKey]) {
        pressedKey = specialKeyMap[pressedKey];
      }

      pressedKey = pressedKey.toLowerCase();

      const locationSelector =
        pressedLocation && `[data-location="${pressedLocation}"]`;
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
                ${typingOn && "cursor-default"}
                ${
                  onClickOn &&
                  `clickEffect ${
                    purpleMode
                      ? "active:bg-custom-purple-50 hover:bg-custom-purple-20"
                      : "active:bg-custom-blue-50 hover:bg-custom-blue-20"
                  }`
                }
                ${
                  mouseEnterOn &&
                  `hoverEffect ${
                    purpleMode
                      ? " hover:bg-custom-purple-50"
                      : "hover:bg-custom-blue-50"
                  }`
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
                    ${typingOn && "cursor-default"}
                    ${
                      onClickOn &&
                      `clickEffect ${
                        purpleMode
                          ? "active:bg-custom-purple-50 hover:bg-custom-purple-20"
                          : "active:bg-custom-blue-50 hover:bg-custom-blue-20"
                      }`
                    }
                    ${
                      mouseEnterOn &&
                      `hoverEffect ${
                        purpleMode
                          ? " hover:bg-custom-purple-50"
                          : "hover:bg-custom-blue-50"
                      }`
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
      </div>

      <div className="key-main-container">
        {mainKeys.map((row, rowIndex) => (
          <div className="key-main-row" key={rowIndex}>
            {row.map((label, labelIndex) => (
              <button
                className={`main-keys 
                  ${label.extraClass || ""}
                  ${
                    typingOn &&
                    `cursor-default ${
                      purpleMode ? "bg-custom-purple-50" : "bg-custom-blue-50"
                    }`
                  }
                  ${
                    onClickOn &&
                    `clickEffect ${
                      purpleMode
                        ? "active:bg-custom-purple-50 hover:bg-custom-purple-20"
                        : "active:bg-custom-blue-50 hover:bg-custom-blue-20"
                    }`
                  }
                  ${
                    mouseEnterOn &&
                    `hoverEffect ${
                      purpleMode
                        ? " hover:bg-custom-purple-50"
                        : "hover:bg-custom-blue-50"
                    }`
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
