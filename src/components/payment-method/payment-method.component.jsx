import React from "react";

import { Container, OptionsContainer, TextContainer, ButtonContainer, InvertedButton}  from "../../styles";

const PaymentMethod = (card) => {
    return (
        <Container>
            <OptionsContainer>
                <TextContainer>{"<logo> Credit Card"}</TextContainer>
            </OptionsContainer>
            <ButtonContainer>
                <InvertedButton>Change</InvertedButton>
            </ButtonContainer>
            <OptionsContainer creditCard>
                <TextContainer>**** **** **** 5462</TextContainer>
                <TextContainer>Expiry Date 12/25</TextContainer>
            </OptionsContainer>

        </Container>
    )
}

export default PaymentMethod;