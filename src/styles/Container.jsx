import styled from "styled-components";

const Container = styled.div`
    height: 200px;
    width: 540px;
    display: block;
    padding: 15px 20px;
    border: 2px solid grey;
    margin-bottom: 25px;
    border-radius: 15px;

    
    @media screen and (max-width: 800px) {
        width: 300px;
        height: 200px;
    }

`;

export default Container;