/*
 * File: Card.jsx
 * Project: refree
 * Created: Thursday, September 7th 2023, 4:43:17 am
 * Last Modified: Friday, September 8th 2023, 5:14:37 am
 * Copyright © 2023 AMDE Agência
 */

import styled from '@emotion/styled';

const StyledElement = styled.div`
  padding: ${props => props.theme.spacing.l};
  background: ${props => props.theme.colors.secondary.a};
  border: 1px solid;
  border-color: ${props => props.theme.colors.primary.a};
  border-radius: ${props => props.theme.spacing.s};
`;

export const Card = ({ children }) => {
  return <StyledElement>{children}</StyledElement>;
};
