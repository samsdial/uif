import React from "react";
import Icon, { ICON_SIZES, IconsProps } from "./Icons";
import VARIANTS from "./variants";
import { Story, Meta } from "@storybook/react";

const Template: Story<IconsProps> = (args: IconsProps) => <Icon {...args} />;

export const Default: Story<IconsProps> = Template.bind({});
Default.args = {
  variantName: "access",
  size: "medium",
  color: "#000000",
};

const IconStories: Meta<IconsProps> = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    variantName: {
      options: Object.keys(VARIANTS),
      control: { type: "radio" },
    },
    size: {
      options: Object.keys(ICON_SIZES),
      control: { type: "radio" },
    },
    color: { control: "color" },
  },
};

export default IconStories;
