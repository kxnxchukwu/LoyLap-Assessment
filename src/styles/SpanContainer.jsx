import styled, {css} from "styled-components";

const SpanContainer = styled.span`
font-weight: bolder;
${(props) =>
    props.grey &&
    css`
    {
        color: #7F7F7F;
    }`
}
`;

export default SpanContainer;