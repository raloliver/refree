/*
 * File: ThemeProvider.jsx
 * Project: refree
 * Created: Thursday, September 7th 2023, 5:13:41 am
 * Last Modified: Friday, September 8th 2023, 5:16:10 am
 * Copyright © 2023 AMDE Agência
 */

import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    white: '#ffffff',
    warning: '#c3362f',
    focus: '#8e53e9',
    primary: {
      a: '#4876e6',
      b: '#c3362f',
      c: '#69f4bd',
    },
    secondary: {
      a: '#ebeaf9',
      b: '#f8f8fd',
    },
    neutral: {
      a: '#081831',
      b: '#e8e8e8',
      c: '#f5f5f5',
    },
    dark: {
      a: '#110ea0',
      b: '#b61b00',
    },
  },
  spacing: {
    xxs: '4px',
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
    xxl: '64px',
  },
  fontFamily: {
    primary: "'Roboto', sans-serif",
    secondary: "'Roboto Slab', serif",
  },
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
