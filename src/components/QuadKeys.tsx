import "../styles/styles.css";

export default function QuadKeys() {
  const functionKeys = [
    ["F1", "F2", "F3", "F4"],
    ["F5", "F6", "F7", "F8"],
    ["F9", "F10", "F11", "F12"],
  ];

  return (
    <div className="quad-container">
      {functionKeys.map((row, rowIndex) => (
        <div className="quad-row" key={rowIndex}>
          {row.map((key) => (
            <button className="quad-keys" key={key}>
              <span>{key}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
