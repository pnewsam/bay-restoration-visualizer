import { useEffect } from "react";
import { select } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { axisBottom, axisLeft } from "d3-axis";
import { barFill, xTickFormat } from "./utils";

interface Params {
  data: {
    x: string;
    y: number;
  }[];
  width: number;
  height: number;
}

export const useBarChart = ({ data, width, height }: Params) => {
  useEffect(() => {
    const svg = select("svg");

    // Create x scale
    const xScale = scaleBand()
      .range([0, width - 20])
      .padding(0.2);
    xScale.domain(
      data.map(function (d) {
        return d.x;
      })
    );

    // Create y scale
    const yScale = scaleLinear().range([height - 40, 0]);
    const yValues = data.map((datum) => datum.y);
    const maxY = Math.max(...yValues);
    const minY = Math.min(...yValues);
    yScale.domain([minY, maxY]);

    // Create group to contain all elements
    const g = svg.append("g").attr("transform", `translate(${50},${0})`);

    // Add bars
    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d: { x: string }) {
        return xScale(d.x);
      } as any)
      .attr("y", function (d) {
        return d.y < 0 ? yScale(minY) : yScale(d.y);
      })
      .attr("width", xScale.bandwidth())
      .attr("height", function (d) {
        const yVal = Math.abs(d.y);
        return height - 40 - yScale(yVal);
      })
      .attr("fill", barFill);

    // Add x axis
    g.append("g")
      .attr("transform", `translate(0,${yScale(minY)})`)
      .call(axisBottom(xScale).tickFormat(xTickFormat).tickPadding(10));

    // Add y axis
    g.append("g")
      .call(axisLeft(yScale).ticks(10))
      .append("text")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("value");
  }, [data]);
};
