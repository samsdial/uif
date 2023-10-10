import { ITheme } from '.';
import typography from './typography';

const darkTheme: ITheme = {
  palette: {
    mode: 'dark',
    backgroundStory: 'rgba(32, 35, 39, 1)',
    background: {
      default: 'rgba(32, 35, 39, 1)',
      surface: 'rgba(44, 47, 52, 1)',
    },
    content: {
      default: 'rgba(0, 0, 0, 0.9)',
      status: 'rgba(255, 255, 255, 0.9)',
    },
    primary: {
      main: 'rgba(107, 159, 243, 1)',
      light: 'rgba(107, 159, 243, 0.8)',
      dark: 'rgba(43, 88, 163, 1)',
    },
    secondary: {
      main: 'rgba(47, 112, 220, 1)',
      light: 'rgba(47, 112, 220, 0.8)',
      dark: 'rgba(30, 67, 154, 1)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.15)',
    },
    action: {
      default: 'rgba(255, 255, 255, 0.25)',
      hover: 'rgba(255, 255, 255, 0.05)',
      active: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.15)',
    },
    error: {
      main: 'rgba(239, 154, 154, 1)',
      light: 'rgba(253, 183, 183, 1)',
      dark: 'rgba(239, 154, 154, 0.6)',
      background: 'rgba(239, 154, 154, 0.2)',
    },
    warning: {
      main: 'rgba(255, 224, 130, 1)',
      light: 'rgba(255, 235, 176, 1)',
      dark: 'rgba(255, 224, 130, 0.7)',
      background: 'rgba(255, 224, 130, 0.2)',
    },
    info: {
      main: 'rgba(107, 159, 243, 1)',
      light: 'rgba(143, 184, 250, 1)',
      dark: 'rgba(107, 159, 243, 0.6)',
      background: 'rgba(107, 159, 243, 0.2)',
    },
    success: {
      main: 'rgba(76, 175, 80, 1)',
      light: 'rgba(97, 200, 102, 1)',
      dark: 'rgba(76, 175, 80, 0.6)',
      background: 'rgba(76, 175, 80, 0.2)',
    },
    other: {
      backdrop: 'rgba(0, 0, 0, 0.4)',
      divider: 'rgba(255, 255, 255, 0.35)',
      snackbar: 'rgba(255, 255, 255, 0.85)',
      outline: 'rgba(255, 255, 255, 0.3)',
      rating: 'rgba(254, 180, 54, 1)',
      topbar: 'rgba(34, 37, 41, 1)',
    },
  },
  typography,
};

export default darkTheme;
