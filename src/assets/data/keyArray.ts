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
    { label: "←", audio: "B", extraClass: "w-[12.1%]" },
    { label: "DEL", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { label: "TAB", audio: "D", extraClass: "w-[9.68%]" },
    { label: "Q", audio: "A", extraClass: "w-[6.22%]" },
    { label: "W", audio: "A", extraClass: "w-[6.22%]" },
    { label: "E", audio: "A", extraClass: "w-[6.22%]" },
    { label: "R", audio: "A", extraClass: "w-[6.22%] mr-[0.1%]" },
    { label: "T", audio: "A", extraClass: "w-[6.22%] mr-[0.1%]" },
    { label: "Y", audio: "A", extraClass: "w-[6.22%]" },
    { label: "U", audio: "A", extraClass: "w-[6.22%]" },
    { label: "I", audio: "A", extraClass: "w-[6.22%]" },
    { label: "O", audio: "A", extraClass: "w-[6.22%]" },
    { label: "P", audio: "A", extraClass: "w-[6.22%] mr-[0.2%]" },
    { label: "[", audio: "A", extraClass: "w-[5.8%] mr-[0.2%]" },
    { label: "]", audio: "A", extraClass: "w-[6.22%]" },
    { label: "\\", audio: "D", extraClass: "w-[9.5%]" },
    { label: "PU", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { label: "CAPS", audio: "D", extraClass: "w-[11.4%]" },
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
    { label: "ENTER", audio: "B", extraClass: "w-[14.3%]" },
    { label: "PD", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { label: "SHIFT", audio: "B", extraClass: "w-[14.7%]" },
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
    { label: "SHIFT", audio: "B", extraClass: "w-[11%]" },
    { label: "↑", audio: "A" },
    { label: "END", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { label: "CTRL", audio: "C", extraClass: "w-[8.3%]" },
    { label: "WIN", audio: "C", extraClass: "w-[7.7%]" },
    { label: "ALT", audio: "C", extraClass: "w-[7.7%]" },
    { label: "SPACE", audio: "E", extraClass: "w-[39.2%]" },
    { label: "FN", audio: "C", extraClass: "w-[7.7%]" },
    { label: "CTRL", audio: "C", extraClass: "w-[7.8%] mr-[2.9%]" },
    { label: "←", audio: "A" },
    { label: "↓", audio: "A", extraClass: "w-[6.1%]"},
    { label: "→", audio: "A", extraClass: "w-[6.25%]" },
  ],
];

export default mainKeys;
