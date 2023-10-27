interface IBackground {
  default: string;
  surface: string;
}

interface IContent {
  default: string;
  status: string;
}

interface IDefaultColorVariant {
  main: string;
  light: string;
  dark: string;
  background: string;
}

type IPrimary = Omit<IDefaultColorVariant, 'background'>;
type ISecondary = Omit<IDefaultColorVariant, 'background'>;

interface IText {
  primary: string;
  secondary: string;
  disabled: string;
}

interface IAction {
  default: string;
  hover: string;
  active: string;
  disabled: string;
}

type IError = IDefaultColorVariant;
type IWarning = IDefaultColorVariant;
type IInfo = IDefaultColorVariant;
type ISuccess = IDefaultColorVariant;

interface IOther {
  backdrop: string;
  divider: string;
  snackbar: string;
  outline: string;
  rating: string;
  topbar: string;
}

interface IPalette {
  mode: 'light' | 'dark';
  backgroundStory: string;
  background: IBackground;
  content: IContent;
  primary: IPrimary;
  secondary: ISecondary;
  text: IText;
  action: IAction;
  error: IError;
  warning: IWarning;
  info: IInfo;
  success: ISuccess;
  other: IOther;
}

interface IDefaultTypographyVariant {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
}

interface ITypographyVariant {
  h1: IDefaultTypographyVariant;
  hB1: IDefaultTypographyVariant;
  h2: IDefaultTypographyVariant;
  hB2: IDefaultTypographyVariant;
  h3: IDefaultTypographyVariant;
  hB3: IDefaultTypographyVariant;
  body1: IDefaultTypographyVariant;
  bodyB1: IDefaultTypographyVariant;
  subtitle1: IDefaultTypographyVariant;
  subtitle2: IDefaultTypographyVariant;
  subtitle3: IDefaultTypographyVariant;
}

export interface ITypography {
  generalFontSize: number;
  fontFamily: string;
  variants: ITypographyVariant;
}

export interface ITheme {
  palette: IPalette;
  typography: ITypography;
}
