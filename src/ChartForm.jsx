import { useState } from "react";

export default function ChartForm({ addData }) {
  const [titel, settitle] = useState("");
  const [value, setvalue] = useState("");
  const [color, setcolor] = useState("#000000");
  function submite() {
    if (titel && value && color) {
      addData({ title: titel, value: value, color: color });
    }
  }

  return (
    <form className="w-1/3 flex flex-col gap-2 p-4">
      <input
        value={titel}
        onChange={(e) => settitle(e.target.value)}
        type="text"
        placeholder="Enter title"
        className="input input-bordered w-full "
      />
      <input
        value={value}
        onChange={(e) => setvalue(parseInt(e.target.value))}
        type="number"
        placeholder="Enter value"
        className="input input-bordered w-full "
      />
      <input
        value={color}
        onChange={(e) => setcolor(e.target.value)}
        type="color"
        className="input input-bordered w-full "
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          submite();
        }}
        className="btn btn-primary"
      >
        Add
      </button>
    </form>
  );
}
