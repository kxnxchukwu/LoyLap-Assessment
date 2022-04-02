import React from "react";
import { Container, OptionsContainer, TextContainer, ButtonContainer, Button, SpanContainer}  from "../../styles";

const Plan = ({name, description, value}) => {
    const valueInEuros = value/100;
    return (
        <Container>
            <OptionsContainer>
                <TextContainer planName>
                    {name}
                </TextContainer>
                <TextContainer> 
                    <SpanContainer>€ {valueInEuros.toFixed(2)}</SpanContainer> 
                    <SpanContainer grey> / month</SpanContainer> 
                </TextContainer>
            </OptionsContainer>
            <OptionsContainer>
                <TextContainer bold>{description}</TextContainer>
            </OptionsContainer>
            <ButtonContainer>
                <Button>Change Plan</Button>
            </ButtonContainer>
        </Container>
    )
}

export default Plan;