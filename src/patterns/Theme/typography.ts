import { getFontSizePercentage, pxToRem } from '../../helpers/utils';
import { ITypography } from '.';

export default {
  generalFontSize: getFontSizePercentage(),
  fontFamily: 'Heebo',
  variants: {
    h1: {
      fontSize: pxToRem(26),
      lineHeight: pxToRem(34),
      fontWeight: 400,
    },
    hB1: {
      fontSize: pxToRem(26),
      lineHeight: pxToRem(34),
      fontWeight: 500,
    },
    h2: {
      fontSize: pxToRem(22),
      lineHeight: pxToRem(30),
      fontWeight: 400,
    },
    hB2: {
      fontSize: pxToRem(22),
      lineHeight: pxToRem(30),
      fontWeight: 500,
    },
    h3: {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(26),
      fontWeight: 400,
    },
    hB3: {
      fontSize: 1.8,
      lineHeight: 2.6,
      fontWeight: 500,
    },
    body1: {
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24),
      fontWeight: 400,
    },
    bodyB1: {
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24),
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: pxToRem(12),
      lineHeight: pxToRem(18),
      fontWeight: 400,
    },
    subtitle3: {
      fontSize: pxToRem(10),
      lineHeight: pxToRem(16),
      fontWeight: 400,
    },
  },
} as ITypography;
