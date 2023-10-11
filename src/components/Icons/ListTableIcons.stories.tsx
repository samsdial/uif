import React from "react";
import Icon, { ICON_SIZES, IconsProps, ICON_VARIANTS } from "./Icons";
import { Story, Meta } from "@storybook/react";

const variantNames = Object.keys(ICON_VARIANTS) as Array<
  keyof typeof ICON_VARIANTS
>;

export const ListTableIcons: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Variant Name</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody>
        {variantNames.map((variantName) => (
          <tr key={variantName}>
            <td>{variantName}</td>
            <td>
              <Icon variantName={variantName} size="small" color="#000000" />
            </td>
            <td>
              <Icon variantName={variantName} size="medium" color="#000000" />
            </td>
            <td>
              <Icon variantName={variantName} size="large" color="#000000" />
            </td>
            <td>
              <Icon variantName={variantName} size="xlarge" color="#000000" />
            </td>
            <td>
              <Icon variantName={variantName} size="xxlarge" color="#000000" />
            </td>
            <td style={{ backgroundColor: "#4687f1" }}>
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
