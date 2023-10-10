import { ITheme } from '../patterns/Theme';
import generalTypes from '../types/general.types';

export const getColorByProps = ({
  theme,
  error = false,
  disabled = false,
}: {
  theme: ITheme;
  error: boolean;
  disabled: boolean;
}) => {
  if (disabled) return theme.palette.action.disabled;
  if (error) return theme.palette.error.main;
  return theme.palette.text.secondary;
};

export const rgbToHex = (colorString: string): string => {
  if (colorString.includes('rgb' || 'rgba')) {
    const a = colorString.split('(')[1].split(')')[0].split(',');
    const b = a.map((x: string, index) => {
      // Convert to a base16 string
      x =
        (index === 3 &&
          Math.round(parseFloat(x) * 255)
            .toString(16)
            .substring(0, 2)) ||
        parseFloat(x).toString(16);
      // Add zero if we get only one character
      return (x.length === 1 && '0'.concat(x)) || x;
    });
    return '#'.concat(b.join(''));
  }

  return colorString;
};

export const capitalize = (text: string): string =>
  text.charAt(0).toUpperCase().concat(text.substring(1));

export const getFontSizePercentage = (): number =>
  (generalTypes.basePX * 100) / 16;

export const pxToRem = (px: number): number => px / generalTypes.basePX;

export const remToPX = (rem: number): number => rem * generalTypes.basePX;
