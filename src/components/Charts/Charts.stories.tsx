import React from "react";
import { Meta, Story } from "@storybook/react";
import ChartP, { IProps } from "./Charts";
import { theme } from "../../patterns/Theme";

const Template: Story<IProps> = (args: IProps) => <ChartP {...args} />;

export const Default: Story<IProps> = Template.bind({});
Default.args = {
  classes: "access",
  title: "medium",
  horizontal: true,
  apexchart: "radialBar",
  height: "500px",
  chartOptions: {
    plotOptions: {
      radialBar: {
        hollow: {
          size: "75%",
        },
      },
    },
    dataLabels: {
      style: {
        fontSize: "20px",
      },
    },
    colors: ["#373d3f", "#f44336"],
  },
  chartSeries: [
    {
      x: "Creado",
      y: 89,
    },
    {
      x: "Solucionado",
      y: 28,
    },
  ],
};

const BarChart: Meta<IProps> = {
  title: "Components/Chart",
  component: ChartP,
  argTypes: {
    chartSeries: [
      {
        name: ["Series 1"],
        data: [30, 40, 45],
      },
    ],
  },
};

export default BarChart;
