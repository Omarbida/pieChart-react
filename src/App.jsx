import { useState } from "react";
import "./App.css";
import Chart from "./Chart";
import ChartForm from "./ChartForm";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([
    { title: "One", value: 10, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
    { title: "Three", value: 20, color: "#6A2135" },
  ]);
  function addData(newData) {
    setData([...data, newData]);
  }
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="flex items-center">
      <div className="w-1/3 p-4">
        <Chart data={data} />
      </div>
      <ChartForm addData={addData} />
    </div>
  );
}

export default App;
