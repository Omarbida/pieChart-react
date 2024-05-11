import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function Chart({ data }) {
  return (
    <PieChart
      data={data}
      label={({ dataEntry }) => dataEntry.value}
      labelStyle={{ color: "#ffffff", fontSize: "7px" }}
    />
  );
}
