import { useState, useEffect } from "react";
import { Knob } from "primereact/knob";

interface ResponsiveKnobProps {
  onKnobChange: (value: number) => void;
  lightOn: boolean;
}

const ResponsiveKnob = ({ onKnobChange, lightOn }: ResponsiveKnobProps) => {
  const [knobValue, setKnobValue] = useState<number>(10);
  const [knobSize, setKnobSize] = useState<number>(100);

  const handleKnobWidth = () => {
    if (window.innerWidth < 480) return 30;
    if (window.innerWidth < 650) return 50;
    if (window.innerWidth < 1024) return 60;
    return 100;
  };

  useEffect(() => {
    const updateKnobSize = () => {
      setKnobSize(handleKnobWidth());
    };

    updateKnobSize();
    window.addEventListener("resize", updateKnobSize);

    return () => {
      window.removeEventListener("resize", updateKnobSize);
    };
  }, []);

  const handleKnobChange = (e: { value: number }) => {
    setKnobValue(e.value);
    onKnobChange(e.value);
  };

  return (
    <>
      {lightOn && (
        <Knob
          value={knobValue}
          size={knobSize}
          min={0}
          max={70}
          showValue={false}
          onChange={handleKnobChange}
          strokeWidth={8}
          className={`knob ${lightOn ? "knob-show" : "knob-hide"}`}
          valueColor="#ffffff"
          rangeColor="#494b64"
        />
      )}
    </>
  );
};

export default ResponsiveKnob;
