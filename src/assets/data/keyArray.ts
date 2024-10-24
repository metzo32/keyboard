export type AudioType = "A" | "B" | "C" | "D" | "E";

interface Key {
  label: string;
  audio: AudioType;
  extraClass?: string;
}

export const functionKeys = [
  ["F1", "F2", "F3", "F4"],
  ["F5", "F6", "F7", "F8"],
  ["F9", "F10", "F11", "F12"],
];


const mainKeys: Key[][] = [
  [
    { label: "~", audio: "A" },
    { label: "1", audio: "A" },
    { label: "2", audio: "A" },
    { label: "3", audio: "A" },
    { label: "4", audio: "A" },
    { label: "5", audio: "A" },
    { label: "6", audio: "A" },
    { label: "7", audio: "A" },
    { label: "8", audio: "A" },
    { label: "9", audio: "A" },
    { label: "0", audio: "A" },
    { label: "-", audio: "A" },
    { label: "+", audio: "A" },
    { label: "←", audio: "B", extraClass: "w-[11.7%]" },
    { label: "DEL", audio: "A" },
  ],
  [
    { label: "TAB", audio: "D", extraClass: "w-[9.4%]" },
    { label: "Q", audio: "A" },
    { label: "W", audio: "A" },
    { label: "E", audio: "A" },
    { label: "R", audio: "A" },
    { label: "T", audio: "A" },
    { label: "Y", audio: "A" },
    { label: "U", audio: "A" },
    { label: "I", audio: "A" },
    { label: "O", audio: "A" },
    { label: "P", audio: "A" },
    { label: "[", audio: "A" },
    { label: "]", audio: "A" },
    { label: "\\", audio: "A", extraClass: "w-[9.1%]" },
    { label: "PU", audio: "A" },
  ],
  [
    { label: "CAPS", audio: "D", extraClass: "w-[11%]" },
    { label: "A", audio: "A" },
    { label: "S", audio: "A" },
    { label: "D", audio: "A" },
    { label: "F", audio: "A" },
    { label: "G", audio: "A" },
    { label: "H", audio: "A" },
    { label: "J", audio: "A" },
    { label: "K", audio: "A" },
    { label: "L", audio: "A" },
    { label: ";", audio: "A" },
    { label: "'", audio: "A" },
    { label: "ENTER", audio: "B", extraClass: "w-[13.7%]" },
    { label: "PD", audio: "A" },
  ],
  [
    { label: "SHIFT", audio: "B", extraClass: "w-[14.25%]" },
    { label: "Z", audio: "A" },
    { label: "X", audio: "A" },
    { label: "C", audio: "A" },
    { label: "V", audio: "A" },
    { label: "B", audio: "A" },
    { label: "N", audio: "A" },
    { label: "M", audio: "A" },
    { label: ",", audio: "A" },
    { label: ".", audio: "A" },
    { label: "/", audio: "D" },
    { label: "SHIFT", audio: "B", extraClass: "w-[10.6%]" },
    { label: "↑", audio: "A" },
    { label: "END", audio: "A" },
  ],
  [
    { label: "CTRL", audio: "C", extraClass: "w-[8%]" },
    { label: "WIN", audio: "C", extraClass: "w-[7%]" },
    { label: "ALT", audio: "C", extraClass: "w-[7%]" },
    { label: "SPACE", audio: "E", extraClass: "w-[38.6%]" },
    { label: "FN", audio: "C", extraClass: "w-[7.2%]" },
    { label: "CTRL", audio: "C", extraClass: "w-[7.5%] mr-[3%]" },
    { label: "←", audio: "A", extraClass: "w-[5.6%]" },
    { label: "↓", audio: "A", extraClass: "w-[5.7%]" },
    { label: "→", audio: "A", extraClass: "w-[5.7%]" },
  ],
];

export default mainKeys;
