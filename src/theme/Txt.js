import { Text, Dimensions } from "react-native";
import styled from "styled-components";
import { colors } from "./colors";

export const Txt = styled.Text`
  color: white;
  font-family: "Futura";
  font-size: ${props => props.size || 20};
  color: ${props => props.color || colors(0.9).white};
  text-align: center;
  width: ${props => Dimensions.get("window").width * (props.width / 100 || 1)};
  margin-vertical: ${props => props.vert || 0};
`;
