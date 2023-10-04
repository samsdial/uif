import { Meta } from '@storybook/react';
import React from 'react';
import Icon, { IconsProps } from './Icons'; // Asegúrate de que la importación sea correcta

export default {
  title: 'Components/ListIcon', // El título de tu historia
  component: Icon, // El componente que estás documentando
} as Meta;

const iconVariants: IconsProps[] = [
  { variantName: 'access', size: 'medium', color: '#000000' },
  { variantName: 'access', size: 'large', color: '#FF5733' },
  // Agrega más objetos IconsProps según tus necesidades
];

export const IconList = () => (
  <table>
    <thead>
      <tr>
        <th>Icon</th>
        <th>Variant Name</th>
      </tr>
    </thead>
    <tbody>
      {iconVariants.map((props, index) => (
        <tr key={index}>
          <td>
            <Icon {...props} />
          </td>
          <td>{props.variantName}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
