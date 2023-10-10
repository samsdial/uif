import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

type PaletteType = 'lightTheme' | 'darkTheme';

const theme = (paletteType: PaletteType = 'lightTheme'): typeof lightTheme | typeof darkTheme =>
  (paletteType === 'lightTheme' && lightTheme) || darkTheme;

export default theme;