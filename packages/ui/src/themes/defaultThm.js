import { color } from '../settings';

import thm from './thm';

let defaultThm = { ...thm };

defaultThm.palette = {
  ...thm.palette,
  primary: {
    ...thm.palette.primary,
    light: '#ff6d01',
    main: '#ff6d01',
    dark: '#ff6d01',
    contrastText: thm.palette.common.black,
  },
  secondary: {
    ...thm.palette.secondary,
    light: '#212121',
    main: '#212121',
    dark: '#212121',
    contrastText: '#fff',
  },
  background: {
    ...thm.palette.background,
    accent: color.accent,
    default: thm.palette.common.white,
    paper: color.mono100,
  },
  text: {
    ...thm.palette.text,
    primary: color.mono900,
    secondary: color.accent,
    disabled: color.mono500,
  },
};

defaultThm.overrides = {
  ...thm.overrides,
};

export default defaultThm;