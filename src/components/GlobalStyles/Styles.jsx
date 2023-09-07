/*
 * File: Styles.jsx
 * Project: refree
 * Created: Thursday, September 7th 2023, 4:34:33 am
 * Last Modified: Thursday, September 7th 2023, 4:51:30 am
 * Copyright © 2023 AMDE Agência
 */

import { Global, css } from '@emotion/react';

const styles = css`
  body {
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: 'Roboto Slab', serif;
  }
`;

export const Styles = () => {
  return <Global styles={styles} />;
};
