/*
 * File: ThemeProvider.jsx
 * Project: refree
 * Created: Thursday, September 7th 2023, 5:13:41 am
 * Last Modified: Thursday, September 7th 2023, 5:22:58 am
 * Copyright © 2023 AMDE Agência
 */

import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    white: '',
    warning: '',
    focus: '',
    primary: {
      a: '',
      b: '',
      c: '',
    },
    secondary: {
      a: '',
      b: '',
    },
    neutral: {
      a: '',
      b: '',
      c: '',
    },
    dark: {
      a: '',
      b: '',
    },
  },
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
