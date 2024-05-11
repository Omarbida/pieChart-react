import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function Chart({ data }) {
  return (
    <div className="flex items-center gap-4">
      <PieChart
        data={data}
        totalValue={100}
        // label={({ dataEntry }) => dataEntry.value}
        labelStyle={{ color: "#ffffff", fontSize: "7px" }}
      />
      <div className="flex flex-col gap-2 w-1/3 items-center">
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
