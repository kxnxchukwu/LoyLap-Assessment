import styled, {css} from "styled-components";

const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) =>
    props.creditCard &&
    css`
    {
        font-size: 18px;
        flex-wrap: wrap;
        justify-content: flex-start;
        column-gap: 50px;
    }
    `}
`;

export default OptionsContainer;