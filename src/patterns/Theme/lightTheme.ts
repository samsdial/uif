import { ITheme } from '.';
import typography from './typography';

const lightTheme: ITheme = {
  palette: {
    mode: 'light',
    backgroundStory: 'rgb(255, 255, 255)',
    background: {
      default: 'rgb(238, 238, 238)',
      surface: 'rgb(255, 255, 255)',
    },
    content: {
      default: 'rgba(255, 255, 255, 0.9)',
      status: 'rgba(0, 0, 0, 0.9)',
    },
    primary: {
      main: 'rgb(70, 135, 241)',
      light: 'rgba(70, 135, 241, 0.8)',
      dark: 'rgb(11, 65, 153)',
    },
    secondary: {
      main: 'rgb(16, 93, 219)',
      light: 'rgba(16, 93, 219, 0.8)',
      dark: 'rgb(38, 82, 188)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.9)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.15)',
    },
    action: {
      default: 'rgba(0, 0, 0, 0.25)',
      hover: 'rgba(0, 0, 0, 0.03)',
      active: 'rgba(0, 0, 0, 0.7)',
      disabled: 'rgba(0, 0, 0, 0.15)',
    },
    error: {
      main: 'rgb(239, 83, 80)',
      light: 'rgba(239, 83, 80, 0.6)',
      dark: 'rgb(211, 47, 47)',
      background: 'rgba(239, 83, 80, 0.2)',
    },
    warning: {
      main: 'rgb(254, 213, 79)',
      light: 'rgba(254, 213, 79, 0.7)',
      dark: 'rgb(232, 196, 56)',
      background: 'rgba(254, 213, 79, 0.2)',
    },
    info: {
      main: 'rgb(70, 135, 241)',
      light: 'rgba(70, 135, 241, 0.6)',
      dark: 'rgb(49, 94, 168)',
      background: 'rgba(70, 135, 241, 0.2)',
    },
    success: {
      main: 'rgb(28, 200, 83)',
      light: 'rgba(28, 200, 83, 0.6)',
      dark: 'rgb(0, 155, 64)',
      background: 'rgba(28, 200, 83, 0.2)',
    },
    other: {
      backdrop: 'rgba(0, 0, 0, 0.4)',
      divider: 'rgba(0, 0, 0, 0.35)',
      snackbar: 'rgba(0, 0, 0, 0.85)',
      outline: 'rgba(0, 0, 0, 0.3)',
      rating: 'rgb(254, 180, 54)',
      topbar: 'rgb(52, 119, 228)',
    },
  },
  typography,
};

export default lightTheme;
