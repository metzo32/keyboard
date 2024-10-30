export type AudioType = "A" | "B" | "C" | "D" | "E";

interface Key {
  code: string;
  label: string;
  audio: AudioType;
  extraClass?: string;
}

// export const functionKeys = [
//   ["F1", "F2", "F3", "F4"],
//   ["F5", "F6", "F7", "F8"],
//   ["F9", "F10", "F11", "F12"],
// ];


export const functionKeys: Key[][] = [
  [
    { code: "F1", label: "F1", audio: "A" },
    { code: "F2", label: "F2", audio: "A" },
    { code: "F3", label: "F3", audio: "A" },
    { code: "F4", label: "F4", audio: "A" },
  ],
  [
    { code: "F5", label: "F5", audio: "A" },
    { code: "F6", label: "F6", audio: "A" },
    { code: "F7", label: "F7", audio: "A" },
    { code: "F8", label: "F8", audio: "A" },
  ],
  [
    { code: "F9", label: "F9", audio: "A" },
    { code: "F10", label: "F10", audio: "A" },
    { code: "F11", label: "F11", audio: "A" },
    { code: "F12", label: "F12", audio: "A" },
  ],
];

const mainKeys: Key[][] = [
  [
    { code: "`", label: "~", audio: "A" },
    { code: "1", label: "1", audio: "A" },
    { code: "2", label: "2", audio: "A" },
    { code: "3", label: "3", audio: "A" },
    { code: "4", label: "4", audio: "A" },
    { code: "5", label: "5", audio: "A" },
    { code: "6", label: "6", audio: "A" },
    { code: "7", label: "7", audio: "A" },
    { code: "8", label: "8", audio: "A" },
    { code: "9", label: "9", audio: "A" },
    { code: "0", label: "0", audio: "A" },
    { code: "-", label: "-", audio: "A" },
    { code: "=", label: "+", audio: "A" },
    { code: "backspace", label: "←", audio: "B", extraClass: "w-[12.1%]" },
    { code: "delete", label: "DEL", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { code: "tab", label: "TAB", audio: "D", extraClass: "w-[9.68%]" },
    { code: "q", label: "Q", audio: "A", extraClass: "w-[6.22%] ml-[0.1%]" },
    { code: "w", label: "W", audio: "A", extraClass: "w-[6.22%]" },
    { code: "e", label: "E", audio: "A", extraClass: "w-[6.22%]" },
    { code: "r", label: "R", audio: "A", extraClass: "w-[6.22%]" },
    { code: "t", label: "T", audio: "A", extraClass: "w-[6.22%] mr-[0.1%]" },
    { code: "y", label: "Y", audio: "A", extraClass: "w-[6.22%]" },
    { code: "u", label: "U", audio: "A", extraClass: "w-[6.22%]" },
    { code: "i", label: "I", audio: "A", extraClass: "w-[6.22%]" },
    { code: "o", label: "O", audio: "A", extraClass: "w-[6.22%]" },
    { code: "p", label: "P", audio: "A", extraClass: "w-[6.22%] mr-[0.2%]" },
    { code: "[", label: "[", audio: "A", extraClass: "w-[5.8%] mr-[0.2%]" },
    { code: "]", label: "]", audio: "A", extraClass: "w-[6.22%]" },
    { code: "\\", label: "\\", audio: "D", extraClass: "w-[9.5%]" },
    { code: "pageUp", label: "PU", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { code: "capslock", label: "CAPS", audio: "D", extraClass: "w-[11.4%]" },
    { code: "a", label: "A", audio: "A" },
    { code: "s", label: "S", audio: "A" },
    { code: "d", label: "D", audio: "A" },
    { code: "f", label: "F", audio: "A" },
    { code: "g", label: "G", audio: "A" },
    { code: "h", label: "H", audio: "A" },
    { code: "j", label: "J", audio: "A" },
    { code: "k", label: "K", audio: "A" },
    { code: "l", label: "L", audio: "A" },
    { code: ";", label: ";", audio: "A" },
    { code: "'", label: "'", audio: "A" },
    { code: "enter", label: "ENTER", audio: "B", extraClass: "w-[14.3%]" },
    { code: "pageDown", label: "PD", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { code: "shift", label: "SHIFT", audio: "B", extraClass: "w-[14.7%]" },
    { code: "z", label: "Z", audio: "A" },
    { code: "x", label: "X", audio: "A" },
    { code: "c", label: "C", audio: "A" },
    { code: "v", label: "V", audio: "A" },
    { code: "b", label: "B", audio: "A" },
    { code: "n", label: "N", audio: "A" },
    { code: "m", label: "M", audio: "A" },
    { code: ",", label: ",", audio: "A" },
    { code: ".", label: ".", audio: "A" },
    { code: "/", label: "/", audio: "D" },
    { code: "shift", label: "SHIFT", audio: "B", extraClass: "w-[11%]" },
    { code: "arrowup", label: "↑", audio: "A" },
    { code: "end", label: "END", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { code: "control", label: "CTRL", audio: "C", extraClass: "w-[8.3%]" },
    { code: "meta", label: "WIN", audio: "C", extraClass: "w-[7.7%]" },
    { code: "alt", label: "ALT", audio: "C", extraClass: "w-[7.7%]" },
    { code: " ", label: "SPACE", audio: "E", extraClass: "w-[39.2%]" },
    { code: "FN", label: "FN", audio: "C", extraClass: "w-[7.7%]" },
    { code: "control", label: "CTRL", audio: "C", extraClass: "w-[7.8%] mr-[2.9%]" },
    { code: "arrowleft", label: "←", audio: "A" },
    { code: "arrowdown", label: "↓", audio: "A", extraClass: "w-[6.1%]"},
    { code: "arrowright", label: "→", audio: "A", extraClass: "w-[6.25%]" },
  ],
];

export default mainKeys;
