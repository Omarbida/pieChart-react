import { useState } from "react";
import "./App.css";
import Chart from "./Chart";
import ChartForm from "./ChartForm";
import { useEffect } from "react";
import SegmentsList from "./SegmentsList";

function App() {
  const [data, setData] = useState([
    { title: "One", value: 10, color: "#a81515" },
    { title: "Two", value: 15, color: "#454393" },
    { title: "Three", value: 5, color: "#0d3f10" },
    { title: "Four", value: 70, color: "#653610" },
  ]);
  function addData(newData) {
    setData([...data, newData]);
  }
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="flex items-center">
      <div className="w-1/2 p-4">
        <Chart data={data} />
      </div>
      <div className="w-1/2 flex flex-col gap-10 p-4">
        <ChartForm addData={addData} data={data} />
        <SegmentsList
          data={data}
          removeData={(index) => {
            setData(data.filter((item, i) => i !== index));
          }}
        />
      </div>
    </div>
  );
}

export default App;
