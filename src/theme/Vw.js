import { View } from 'react-native';
import styled from 'styled-components';
import { colors } from './colors';

export const Vw = styled.View`
  display: flex;
  flex: ${({ flex }) => flex || 1};
  align-items: center;
  align-self: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  background-color: ${({ background }) => background || colors().blue};
  padding-top: ${({ paddingTop }) => paddingTop || 0};
  padding-bottom: ${({ paddingTop }) => paddingTop || 0};
  margin-right: ${({ paddingHorizontal, paddingRight }) =>
    paddingRight || paddingHorizontal || 0};
  margin-left: ${({ paddingHorizontal, paddingLeft }) =>
    paddingLeft || paddingHorizontal || 0};
  /* width: ${({ width }) => `${width}%`} */
  /* margin-horizontal: ${({ marginHorizontal }) => `${marginHorizontal}%`}; */
`;
