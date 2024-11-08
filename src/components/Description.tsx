import "../styles/styles.css";
import { IoClose } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useState } from "react";

interface DescriptionProps {
  onClose: () => void;
}

interface InfoTextProps {
  id: number;
  text: string;
}

export default function Description({ onClose }: DescriptionProps) {
  const [messages, setMessages] = useState<InfoTextProps[]>([
    {
      id: 1,
      text: "사용 중인 키보드의 배열에 따라 다르게 동작하는 것처럼 보일 수 있습니다.",
    },
    {
      id: 2,
      text: "브라우저 정책에 따라 타이핑 모드에서 ESC와 Function 키는 지원하지 않습니다.",
    },
    {
      id: 3,
      text: "우측 상단의 LED키를 통해 조도를 조절할 수 있습니다.",
    },
  ]);
  const [removedIds, setRemovedIds] = useState<Set<number>>(new Set());
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleCloseMessage = (id: number) => {
    if (isButtonDisabled) return;

    setIsButtonDisabled(true); // 버튼 다중 클릭 방지를 위해 비활성화
    setRemovedIds((prev) => new Set(prev).add(id));

    setTimeout(() => {
      const updatedMessages = messages.filter((message) => message.id !== id);
      setMessages(updatedMessages);

      if (updatedMessages.length === 0) {
        const background = document.querySelector(".info-bg");
        background?.classList.add("info-close");
        setTimeout(() => {
          background?.classList.remove("info-close");
          onClose();
        }, 1000);
      }

      setIsButtonDisabled(false); // 버튼 다시 활성화
    }, 500);
  };

  return (
    <div className="info-bg">
      <div className="resizable-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`info-container ${
              removedIds.has(message.id) ? "info-remove" : ""
            }`}
          >
            <div className="info-icon-box">
              <IoMdInformationCircleOutline className="info-icon" />
            </div>
            <p className="info-text">{message.text}</p>

            <button
              className="close-button"
              onClick={() => handleCloseMessage(message.id)}
              disabled={isButtonDisabled} // 버튼 비활성화 상태 적용
            >
              <IoClose className="close-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
