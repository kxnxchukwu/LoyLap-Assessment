import styled from "styled-components";
import Button from "./Button";

const InvertedButton = styled(Button)`
background-color: white;
color: #8A2BE2;
border: 1px solid white;
&:hover {
  background-color: black;
  color: white;
  border: none;
}
`;

export default InvertedButton;