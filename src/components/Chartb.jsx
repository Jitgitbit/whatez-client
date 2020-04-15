import { ResponsiveContainer, PieChart, Pie } from "recharts";
// import { Panel } from "react-bootstrap";
import React, { Component } from "react";
import { getShots } from "../actions/shotsActions";
import { connect } from "react-redux";

const data = [{ name: "network 1", value: 2 }, { name: "network 3", value: 4 }];

const uniqueCount = data

var count = [];

uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(`count:`,count);

const dataToGraph = Object.keys(count).map(key => ({ name: key, value: count[key] }))
console.log(`dataToGraph:`,dataToGraph)

export default ({ name }) =>
  <ResponsiveContainer width="100%" height={250}>
    <PieChart height={250}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          value,
          index
        }) => {
          console.log("handling label?");
          const RADIAN = Math.PI / 180;
          // eslint-disable-next-line
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          // eslint-disable-next-line
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          // eslint-disable-next-line
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="#8884d8"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {data[index].name} ({value})
            </text>
          );
        }}
      />
    </PieChart>
  </ResponsiveContainer>;