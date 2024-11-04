import "../styles/styles.css";
import { IoClose } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface DescriptionProps {
  onClose: () => void;
}

export default function Description({ onClose }: DescriptionProps) {
  return (
    <div className="info-bg">
      <div className="info-container mb-9">
        <IoMdInformationCircleOutline size={20}/>
        <p className="info-text"> 사용 중인 키보드의 배열에 따라 다르게 동작하는 것처럼 보일 수
        있습니다.</p>
        <button 
      className="close-button"
      onClick={onClose}
      >
        <IoClose className="icons"/>
      </button>
        </div>


        <div className="info-container">
        <IoMdInformationCircleOutline/>
          <p className="info-text">브라우저 정책에 따라 타이핑 모드에서 ESC 와 Function 키는 지원하지
          않습니다.</p>
      <button 
      className="close-button"
      onClick={onClose}
      >
        <IoClose className="icons"/>
      </button>
      </div>
    </div>
  );
}
