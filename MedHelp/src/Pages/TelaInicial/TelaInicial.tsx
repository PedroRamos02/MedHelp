import { Button } from "../../Components/Button/button"
import { SpanText, Title } from "../../Components/Text"
import { WrapperButtons, WrapperTittle } from "../../Themes/Wrapper.style"

export const TelaInicial = () => {

    return (
        <WrapperTittle>
            <Title>SUA SAÚDE</Title>
            <Title><SpanText>NOSSA</SpanText>  MISSÃO</Title>
            <WrapperButtons>
                <Button $primary>Agende agora</Button>
                <Button $primary>Saiba mais</Button>
            </WrapperButtons>
        </WrapperTittle>
        
    )
}