import { useEffect } from "react";
import { useState } from "react";

const presetColors = [
  "#FF5733",
  "#33FF57",
  "#3366FF",
  "#FF33CC",
  "#FFFF33",
  "#33FFFF",
  "#9933FF",
  "#FF3333",
];

export default function ChartForm({ addData, data }) {
  const [titel, settitle] = useState("");
  const [value, setvalue] = useState("");
  const [color, setcolor] = useState("#000000");
  const [disabled, setdisabled] = useState(true);
  const [selectedColor, setselectedColor] = useState(0);
  function submite() {
    if (titel && value && color) {
      //check if the total is less than 100
      let total = 0;
      data.forEach((item) => {
        total += item.value;
      });
      total += value;
      if (total > 100) {
        alert("Total value should be less than 100");
        return;
      }

      addData({ title: titel, value: value, color: color });
      settitle("");
      setvalue("");
      setcolor("");
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
    <form className="w-full flex flex-col gap-2 ">
      <input
        value={titel}
        onChange={(e) => settitle(e.target.value)}
        type="text"
        placeholder="Enter Allocation Name"
        className="input input-bordered w-full "
      />
      <input
        value={value}
        onChange={(e) => setvalue(parseInt(e.target.value))}
        type="number"
        placeholder="Enter value"
        className="input input-bordered w-full "
      />
      <div className="flex flex-wrap gap-2">
        {presetColors.map((item, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setcolor(item);
              setselectedColor(index);
            }}
            className={`btn grow h-6  cursor-pointer ${
              selectedColor === index
                ? "border-4 border-primary opacity-100"
                : "border-0 opacity-30"
            }`}
            style={{ backgroundColor: item }}
          ></button>
        ))}
      </div>
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
