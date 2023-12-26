/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export interface IProps {
  classes?: any;
  className?: string;
  title?: string;
  horizontal?: boolean;
  apexchart?:
    | "bar"
    | "line"
    | "area"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined;
  height?: string;
  chartOptions?: ApexOptions;
  chartSeries?: any[];
}

const ChartP = React.memo<IProps>(
  ({ apexchart, height = "76%", chartOptions, chartSeries }) => {
    return (
      <Chart
        options={
          chartOptions || {
            ...(chartOptions as unknown as ApexOptions),
            plotOptions: {
              ...(chartOptions as unknown as ApexOptions)?.plotOptions,
              bar: {
                ...(chartOptions as unknown as ApexOptions)?.plotOptions?.bar,
                borderRadiusApplication: undefined,
              },
            },
          }
        }
        series={chartSeries}
        type={apexchart}
        height={height}
      />
    );
  }
);

export default ChartP;
