import { useRef, useEffect } from "react";
import AAudio from "../assets/audio/A.mp3";
import BAudio from "../assets/audio/B.mp3";
import CAudio from "../assets/audio/C.mp3";
import DAudio from "../assets/audio/D.mp3";
import EAudio from "../assets/audio/E.mp3";
import { AudioType } from "../../assets/data/keyArray";


function useAudioPlayer() {
  // 오디오 배열 생성 함수
  const createAudioArray = (audioSource: string, count: number) =>
    Array.from({ length: count }, () => new Audio(audioSource));

  // 오디오 맵 ref
  const audioMap = useRef<{ [audioFileName in AudioType]: HTMLAudioElement[] }>({
    A: createAudioArray(AAudio, 10),
    B: createAudioArray(BAudio, 10),
    C: createAudioArray(CAudio, 10),
    D: createAudioArray(DAudio, 10),
    E: createAudioArray(EAudio, 10),
  });

  // 각 오디오의 인덱스 관리 ref
  const audioIndex = useRef<{ [audioFileName in AudioType]: number }>({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  });

  // 초기 로딩 처리
  useEffect(() => {
    Object.values(audioMap.current).forEach((audioArray) =>
      audioArray.forEach((audio) => audio.load())
    );
  }, []);

  // 오디오 재생 함수
  const playHandler = (audio: AudioType) => {
    const audioArray = audioMap.current[audio];
    const index = audioIndex.current[audio];

    const audioElement = audioArray[index];
    audioElement.currentTime = 0;
    audioElement.play();

    audioIndex.current[audio] = (index + 1) % audioArray.length;
  };

  return { playHandler };
}

export default useAudioPlayer;
