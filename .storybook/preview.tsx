import "@fontsource/heebo";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/500.css";

import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../src/patterns/Theme/theme";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.backgroundStory};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.typography.fontFamily}, Arial;
  }

  html {
    font-size: ${({ theme }) => theme.typography.generalFontSize}%;
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.variants.h1.fontSize}rem;
    line-height: ${({ theme }) => theme.typography.variants.h1.lineHeight}rem;
    font-weight: ${({ theme }) => theme.typography.variants.h1.fontWeight};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.variants.h2.fontSize}rem;
    line-height: ${({ theme }) => theme.typography.variants.h2.lineHeight}rem;
    font-weight: ${({ theme }) => theme.typography.variants.h2.fontWeight};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.variants.h3.fontSize}rem;
    line-height: ${({ theme }) => theme.typography.variants.h3.lineHeight}rem;
    font-weight: ${({ theme }) => theme.typography.variants.h3.fontWeight};
  }
`;

const withThemeProvider: React.FC<any> = (Story, context) => {
  return (
    <ThemeProvider theme={theme(context.globals.theme)}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,

      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "lightTheme",
    toolbar: {
      icon: "circlehollow",
      items: ["lightTheme", "darkTheme"],
      showName: true,
      dynamicTitle: true,
    },
  },
};
