export type AudioType = "A" | "B" | "C" | "D" | "E";

type LocationType = "L" | "R"

interface Key {
  code: string;
  label: string;
  audio: AudioType;
  extraClass?: string;
  location?: LocationType;
}

export const escKey: Key[][] = [[
  { code: "Escape", label: "ESC", audio: "A" },
]]

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
    { code: "backquote", label: "~", audio: "A" },
    { code: "digit1", label: "1", audio: "A" },
    { code: "digit2", label: "2", audio: "A" },
    { code: "digit3", label: "3", audio: "A" },
    { code: "digit4", label: "4", audio: "A" },
    { code: "digit5", label: "5", audio: "A" },
    { code: "digit6", label: "6", audio: "A" },
    { code: "digit7", label: "7", audio: "A" },
    { code: "digit8", label: "8", audio: "A" },
    { code: "digit9", label: "9", audio: "A" },
    { code: "digit0", label: "0", audio: "A" },
    { code: "minus", label: "-", audio: "A" },
    { code: "equal", label: "+", audio: "A" },
    { code: "backspace", label: "←", audio: "B", extraClass: "w-[12.1%]" },
    { code: "Delete", label: "DEL", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { code: "tab", label: "TAB", audio: "D", extraClass: "w-[9.68%]" },
    { code: "keyq", label: "Q", audio: "A", extraClass: "w-[6.22%] ml-[0.1%]" },
    { code: "keyw", label: "W", audio: "A", extraClass: "w-[6.22%]" },
    { code: "keye", label: "E", audio: "A", extraClass: "w-[6.22%]" },
    { code: "keyr", label: "R", audio: "A", extraClass: "w-[6.22%]" },
    { code: "keyt", label: "T", audio: "A", extraClass: "w-[6.22%] mr-[0.1%]" },
    { code: "keyy", label: "Y", audio: "A", extraClass: "w-[6.22%]" },
    { code: "keyu", label: "U", audio: "A", extraClass: "w-[6.22%]" },
    { code: "keyi", label: "I", audio: "A", extraClass: "w-[6.22%]" },
    { code: "keyo", label: "O", audio: "A", extraClass: "w-[6.22%]" },
    { code: "keyp", label: "P", audio: "A", extraClass: "w-[6.22%] mr-[0.2%]" },
    { code: "bracketleft", label: "[", audio: "A", extraClass: "w-[5.8%] mr-[0.2%]" },
    { code: "bracketright", label: "]", audio: "A", extraClass: "w-[6.22%]" },
    { code: "backslash", label: "\\", audio: "D", extraClass: "w-[9.5%]" },
    { code: "PageUp", label: "PU", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { code: "capslock", label: "CAPS", audio: "D", extraClass: "w-[11.4%]" },
    { code: "keya", label: "A", audio: "A" },
    { code: "keys", label: "S", audio: "A" },
    { code: "keyd", label: "D", audio: "A" },
    { code: "keyf", label: "F", audio: "A" },
    { code: "keyg", label: "G", audio: "A" },
    { code: "keyh", label: "H", audio: "A" },
    { code: "keyj", label: "J", audio: "A" },
    { code: "keyk", label: "K", audio: "A" },
    { code: "keyl", label: "L", audio: "A" },
    { code: "semicolon", label: ";", audio: "A" },
    { code: "quote", label: "'", audio: "A" },
    { code: "enter", label: "ENTER", audio: "B", extraClass: "w-[14.3%]" },
    { code: "PageDown", label: "PD", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { code: "shiftleft", label: "SHIFT", audio: "B", extraClass: "w-[14.7%]", location: "L" },
    { code: "keyz", label: "Z", audio: "A" },
    { code: "keyx", label: "X", audio: "A" },
    { code: "keyc", label: "C", audio: "A" },
    { code: "keyv", label: "V", audio: "A" },
    { code: "keyb", label: "B", audio: "A" },
    { code: "keyn", label: "N", audio: "A" },
    { code: "keym", label: "M", audio: "A" },
    { code: "comma", label: ",", audio: "A" },
    { code: "period", label: ".", audio: "A" },
    { code: "slash", label: "/", audio: "D" },
   
    { code: "shiftright", label: "SHIFT", audio: "B", extraClass: "w-[11%]", location: "R" },
    { code: "arrowup", label: "↑", audio: "A" },
    { code: "end", label: "END", audio: "A", extraClass: "w-[6.25%]" },
  ],
  [
    { code: "controlleft", label: "CTRL", audio: "C", extraClass: "w-[8.3%]", location: "L" },
    { code: "metaleft", label: "WIN", audio: "C", extraClass: "w-[7.7%]", location: "L" },
    { code: "altleft", label: "ALT", audio: "C", extraClass: "w-[7.7%]", location: "L" },
    { code: "space", label: "SPACE", audio: "E", extraClass: "w-[39.2%]" },
    { code: "metaright", label: "FN", audio: "C", extraClass: "w-[7.7%]", location: "R" },
    { code: "altright", label: "CTRL", audio: "C", extraClass: "w-[7.8%] mr-[2.9%]", location: "R" },
    { code: "arrowleft", label: "←", audio: "A" },
    { code: "arrowdown", label: "↓", audio: "A", extraClass: "w-[6.1%]"},
    { code: "arrowright", label: "→", audio: "A", extraClass: "w-[6.25%]" },
  ],
];

export const specialKeyMap: Record<string, string> = {
  "~": "`",
  "!": "1",
  "@": "2",
  "#": "3",
  "$": "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  "_": "-",
  "+": "=",
  "{": "[",
  "}": "]",
  "|": "\\",
  ":": ";",
  "\"": "'",
  "<": ",",
  ">": ".",
  "?": "/",
};


export default mainKeys;