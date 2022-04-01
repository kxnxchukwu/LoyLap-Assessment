import React from "react";
import { Container, OptionsContainer, TextContainer, ButtonContainer, Button}  from "../../styles";

const Plan = ({name, description, value}) => {
    return (
        <Container>
            <OptionsContainer>
                <TextContainer>{name}</TextContainer>
                <TextContainer> € {value} / month </TextContainer>
            </OptionsContainer>
            <OptionsContainer>
                <TextContainer>{description}</TextContainer>
            </OptionsContainer>
            <ButtonContainer>
                <Button>Change Plan</Button>
            </ButtonContainer>
        </Container>
    )
}

export default Plan;