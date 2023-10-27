import { create } from "@storybook/theming";

const lightTheme = create({
  base: "light",

  brandTitle: "Fracttus",

  brandUrl: "https://fracttus.fracttal.com/",

  brandImage:
    "https://www.fracttal.com/hubfs/Fracttal%20Website%202021/logo/logo-fracttal.webp",

  brandTarget: "_self",
});

const darkTheme = create({
  base: "dark",

  brandTitle: "Fracttus",

  brandUrl: "https://fracttus.fracttal.com/",

  brandImage:
    "https://www.fracttal.com/hubfs/Fracttal%20Website%202021/logo/logo-fracttal.webp",

  brandTarget: "_self",
});

export default { lightTheme, darkTheme };
