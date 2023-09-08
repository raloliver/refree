/*
 * File: index.js
 * Project: refree
 * Created: Friday, September 8th 2023, 5:37:16 am
 * Last Modified: Friday, September 8th 2023, 6:34:54 am
 * Copyright © 2023 AMDE Agência
 */

import styled from '@emotion/styled';

const elements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  bodyBold1: 'strong',
  body2: 'p',
  bodyBold2: 'strong',
  subtitle: 'p',
};

const styledElement = {
  h1: `
    font-size: 40px;
    font-weight: 600;
    `,
  h2: `
    font-weight: 600;
    font-size: 32px;
`,
  h3: `
    font-weight: 500;
    font-size: 24px;
`,
  body1: `
    font-size: 20px;
    font-weight: 400;
    `,
  bodyBold1: `
    font-weight: 700;
    font-size: 20px;
`,
  body2: `
    font-weight: 400;
    font-size: 16px;
`,
  bodyBold2: `
    font-weight: 700;
    font-size: 16px;
`,
  subtitle: `
    font-weight: 400;
    font-size: 14px;
`,
};

export const Typography = ({ element, style, children }) => {
  const elementRef = elements[element];
  const Component = styled[elementRef]`
    ${styledElement[style]}
  `;

  return <Component>{children}</Component>;
};
