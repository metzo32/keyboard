import { useState, useEffect } from "react";
import { Knob } from "primereact/knob";

interface KnobProps {
  onKnobChange: (value: number) => void;
  onLightOn: boolean;
}

export default function ResponsiveKnob({ onKnobChange, onLightOn }: KnobProps) {
  const [knobValue, setKnobValue] = useState<number>(0);
  const [knobSize, setKnobSize] = useState(100); // 기본 Knob 크기 설정

  const handleKnobWidth = () => {
    if (window.innerWidth < 480) {
      //이하
      return 30;
    } else if (window.innerWidth < 650) {
      //custom-sm
      return 40;
    } else if (window.innerWidth < 768) {
      //sm
      return 50;
    } else if (window.innerWidth < 1024) {
      //md
      return 60;
    } else {
      //lg
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
    <Knob
      value={knobValue}
      size={knobSize}
      min={0}
      max={70}
      showValue={false}
      onChange={onKnobChange}
      strokeWidth={8}
      className={`knob ${onLightOn ? "knob-show" : "knob-hide"}`}
    />
  );
}
