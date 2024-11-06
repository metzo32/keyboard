import "../styles/styles.css";
import { IoClose } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useState } from "react";

interface DescriptionProps {
  onClose: () => void;
}

export default function Description({ onClose }: DescriptionProps) {
  const [messages, setMessages] = useState([
    "사용 중인 키보드의 배열에 따라 다르게 동작하는 것처럼 보일 수 있습니다.",
    "브라우저 정책에 따라 타이핑 모드에서 ESC 와 Function 키는 지원하지 않습니다.",
  ]);

  // 개별 메시지 닫기 
  const handleCloseMessage = (index: number) => {
    const updatedMessages = messages.filter((_, i) => i !== index); // 해당 메시지 삭제
    setMessages(updatedMessages);

    if (updatedMessages.length === 0) {
      onClose(); // 모든 메시지가 닫히면 전체 닫기
    }
  };

  // 내일 할일은 info-container 정리, i 아이콘 인라인 스타일 정리, 닫기 애니메이션 추가, 컬러변경 마스킹 애니메이션
  return ( 
    <div className="info-bg">
      {messages.map((message, index) => (
        <div key={index} className="info-container mb-9">
          <IoMdInformationCircleOutline className="mr-10" />
          <p className="info-text">{message}</p>
          <button
            className="close-button"
            onClick={() => handleCloseMessage(index)}
          >
            <IoClose className="icons" />
          </button>
        </div>
      ))}
    </div>
  );
}
