import styled, {css} from "styled-components";

const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    ${(props) =>
    props.creditCard &&
    css`
    {
        flex-wrap: wrap;
        justify-content: flex-start;
        column-gap: 50px;
    }
    `}
    ${(props) =>
    props.logo &&
    css`
    {
        flex-wrap: wrap;
        justify-content: flex-start;
        column-gap: 10px;
    }
    `}
`;

export default OptionsContainer;