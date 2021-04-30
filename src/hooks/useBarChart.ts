import { useEffect } from "react";
import { select } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { axisBottom, axisLeft } from "d3-axis";

interface Params {
  data: {
    [field: string]: string;
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
        return d.year;
      })
    );

    // Create y scale
    const yScale = scaleLinear().range([height - 40, 0]);
    const yValues = data.map((datum) =>
      parseFloat(datum.acres_chg_bay_surface)
    );
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
      .attr("x", function (d: { year: string }) {
        return xScale(d.year);
      } as any)
      .attr("y", function (d) {
        const yVal = parseFloat(d.acres_chg_bay_surface);
        if (yVal < 0) {
          return yScale(minY);
        }
        return yScale(yVal);
      })
      .attr("width", xScale.bandwidth())
      .attr("height", function (d) {
        const yVal = Math.abs(parseFloat(d.acres_chg_bay_surface));
        return height - 40 - yScale(yVal);
      })
      .attr("fill", function (d) {
        return parseFloat(d.acres_chg_bay_surface) < 0 ? "#ff3860" : "#485fc7";
      });

    // Add x axis
    g.append("g")
      .attr("transform", `translate(0,${yScale(minY)})`)
      .call(
        axisBottom(xScale)
          .tickFormat(function (d: any) {
            return d % 5 === 0 ? d : undefined;
          } as any)
          .tickPadding(10)
      );

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
