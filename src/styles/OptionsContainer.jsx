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
        margin-left: 88px;
        column-gap: 35px;
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
    @media screen and (max-width: 800px) {
        ${(props) =>
        props.creditCard &&
        css`
        {
            flex-wrap: wrap;
            justify-content: flex-start;
            margin-left: 5px;
            column-gap: 10px;
        }
    `}
    }  
`;

export default OptionsContainer;