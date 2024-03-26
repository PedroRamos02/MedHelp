import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean; }>`
  
  background: ${props => props.$primary ? "white" : "white"};
  color: ${props => props.$primary ? "#6797E7" : "#BF4F74"};
  font-family: var(Jost) ;
  font-size: ${props => props.$primary ? "24px" : "#BF4F74"};;
  width: 227px;
  height: 65px;
  border: ${props => props.$primary ? "2px solid #6797E7" :  "2px solid white"};
  border-radius: 303.5px;
`;
