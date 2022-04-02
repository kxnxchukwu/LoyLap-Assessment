import styled, {css} from "styled-components";

const TextContainer = styled.p`
color: black;
${(props) =>
    props.planName &&
    css`
    {
        font-size: 22px;
        font-weight: bolder;
    }`
}
${(props) =>
    props.expiry &&
    css`
    {
        color: #7F7F7F;
        font-weight: bolder;
    }`
}
${(props) =>
    props.bold &&
    css`
    {
        font-weight: bolder;
    }`
}
`;

export default TextContainer;