import React from 'react';
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
