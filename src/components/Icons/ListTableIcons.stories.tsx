import React from "react";
import Icon, { ICON_SIZES, IconsProps, ICON_VARIANTS } from "./Icons";
import { Story, Meta } from "@storybook/react";

const variantNames = Object.keys(ICON_VARIANTS) as Array<
  keyof typeof ICON_VARIANTS
>;

const padding = "6px";

export const ListTableIcons: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>VariantName</th>
          <th>small</th>
          <th>medium</th>
          <th>large</th>
          <th>xlarge</th>
          <th> xxlarge / Blue</th>
        </tr>
      </thead>
      <tbody>
        {variantNames.map((variantName) => (
          <tr key={variantName}>
            <td>
              <h3>{variantName}</h3>
            </td>
            <td style={{ padding: padding }}>
              <Icon variantName={variantName} size="small" color="#000000" />
            </td>
            <td style={{ padding: padding }}>
              <Icon variantName={variantName} size="medium" color="#000000" />
            </td>
            <td style={{ padding: padding }}>
              <Icon variantName={variantName} size="large" color="#000000" />
            </td>
            <td style={{ padding: padding }}>
              <Icon variantName={variantName} size="xlarge" color="#000000" />
            </td>
            <td style={{ padding: padding }}>
              <Icon variantName={variantName} size="xxlarge" color="#4687f1" />
            </td>
            <td style={{ padding: padding, backgroundColor: "#4687f1" }}>
              <Icon variantName={variantName} size="xxlarge" color="#fff" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const IconTableStories: Meta = {
  title: "Components/IconTable",
  component: ListTableIcons,
};

export default IconTableStories;
