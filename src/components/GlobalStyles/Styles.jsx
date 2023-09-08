/*
 * File: Styles.jsx
 * Project: refree
 * Created: Thursday, September 7th 2023, 4:34:33 am
 * Last Modified: Friday, September 8th 2023, 5:23:07 am
 * Copyright © 2023 AMDE Agência
 */

import { Global } from '@emotion/react';

const styles = (theme) => {
  return {
    html: {
      fontFamily: theme.fontFamily.primary,
    },
    body: {
      margin: 0,
    },
    h1: {
      fontFamily: theme.fontFamily.secondary,
    },
    h2: {
      fontFamily: theme.fontFamily.secondary,
    },
    h3: {
      fontFamily: theme.fontFamily.secondary,
    },
    h4: {
      fontFamily: theme.fontFamily.secondary,
    },
    h5: {
      fontFamily: theme.fontFamily.secondary,
    },
    h6: {
      fontFamily: theme.fontFamily.secondary,
    },
    button: {
      fontFamily: theme.fontFamily.secondary,
    },
  };
};

export const Styles = () => {
  return <Global styles={styles} />;
};
