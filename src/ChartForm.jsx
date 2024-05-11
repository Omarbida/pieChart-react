import { useEffect } from "react";
import { useState } from "react";

export default function ChartForm({ addData }) {
  const [titel, settitle] = useState("");
  const [value, setvalue] = useState("");
  const [color, setcolor] = useState("#000000");
  const [disabled, setdisabled] = useState(true);
  function submite() {
    if (titel && value && color) {
      addData({ title: titel, value: value, color: color });
      settitle("");
      setvalue("");
      setcolor("#000000");
    }
  }
  useEffect(() => {
    if (titel && value && color) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [titel, value, color]);
  return (
    <form className="w-1/2 flex flex-col gap-2 p-4">
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
        className="input input-bordered w-full cursor-pointer"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          submite();
        }}
        className={"btn  " + (disabled ? "btn-disabled" : "btn-primary")}
      >
        Add
      </button>
    </form>
  );
}
