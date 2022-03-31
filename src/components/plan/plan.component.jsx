import React from "react";
import { Container, OptionsContainer, TextContainer, ButtonContainer, Button}  from "../../styles";

const Plan = (plan) => {
    return (
        <Container>
            <OptionsContainer>
                <TextContainer>Lorem Ipsum</TextContainer>
                <TextContainer> € 15.00 / month </TextContainer>
            </OptionsContainer>
            <OptionsContainer>
                <TextContainer>Ut elementum consequat diam</TextContainer>
            </OptionsContainer>
            <ButtonContainer>
                <Button>Change Plan</Button>
            </ButtonContainer>
        </Container>
    )
}

export default Plan;