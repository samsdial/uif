import { Meta, Story } from '@storybook/react';
import React from 'react';
import Icon, { ICON_SIZES, IconsProps } from './Icons'; // Asegúrate de que la importación sea correcta
import VARIANTS from './variants';

export default {
  title: 'Components/Icon', // El título de tu historia
  component: Icon, // El componente que estás documentando
  argTypes: {
    variantName: {
      options: Object.keys(VARIANTS), // Lista de opciones basada en tus variantes
      control: { type: 'radio' }, // Puedes cambiar el tipo de control según tus necesidades
    },
    size: {
      options: Object.keys(ICON_SIZES), // Lista de opciones basada en tus tamaños
      control: { type: 'radio' }, // Puedes cambiar el tipo de control según tus necesidades
    },
    color: { control: 'color' }, // Control de color para el color del ícono (opcional)
  },
} as Meta;

const Template: Story<IconsProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  variantName: 'access', // Variante por defecto
  size: 'medium', // Tamaño por defecto
  color: '#000000', // Color opcional
};
