import { useEffect } from "react";
import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function Chart({ data }) {
  //check if the total is not 100 and add a grey item to make it 100
  const [tempData, setTempData] = useState(data);
  useEffect(() => {
    let total = 0;
    data.forEach((item) => {
      total += item.value;
    });
    if (total < 100) {
      setTempData([
        ...data,
        {
          title: "Other",
          value: 100 - total,
          color: "#5C5C5C",
        },
      ]);
    }
  }, [data]);

  return (
    <div className="flex items-center gap-4">
      <PieChart
        data={tempData}
        totalValue={100}
        label={({ dataEntry }) => `${dataEntry.value}%`}
        labelPosition={80}
        labelStyle={{ color: "#ffffff", fontSize: "7px" }}
      />
      <div className="flex flex-col gap-2 w-1/3 pl-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span>{item.title}</span>
            <span>{item.value + "%"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
