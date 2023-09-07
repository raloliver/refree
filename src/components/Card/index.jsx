/*
 * File: index.jsx
 * Project: refree
 * Created: Thursday, September 7th 2023, 4:43:17 am
 * Last Modified: Thursday, September 7th 2023, 4:59:38 am
 * Copyright © 2023 AMDE Agência
 */

import styled from '@emotion/styled';
import React from 'react';

const StyledElement = styled.div`
  padding: 32px;
  background: #c5b8d9;
  border: 1px solid #8e53e9;
  border-radius: 16px;
`;

export const Card = ({ children }) => {
  return <StyledElement>{children}</StyledElement>;
};