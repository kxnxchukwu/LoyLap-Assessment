import React from "react";
import { ReactComponent as VisaLogo} from "../../assets/cardtypes/visa.svg";
import { ReactComponent as MastercardLogo} from "../../assets/cardtypes/mastercard.svg";
import { Container, LogoContainer, OptionsContainer, TextContainer, ButtonContainer, InvertedButton}  from "../../styles";

const PaymentMethod = ({type, expiry, lastFour}) => {
    return (
        <Container>
            <OptionsContainer logo>
            <LogoContainer>
            {type === 'visa' ? <VisaLogo/> : <MastercardLogo/>}
            </LogoContainer>
            <TextContainer bold>
            Credit Card
            </TextContainer>
            </OptionsContainer>
            <ButtonContainer>
                <InvertedButton>Change</InvertedButton>
            </ButtonContainer>
            <OptionsContainer creditCard>
                <TextContainer bold >**** **** **** {lastFour}</TextContainer>
                <TextContainer expiry>Expiry Date {expiry}</TextContainer>
            </OptionsContainer>
        </Container>
    )
}

export default PaymentMethod;