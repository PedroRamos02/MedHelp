import styled from "styled-components"
import { Button } from "../../Components/Button/button"
import { Title } from "../../Components/Text"
import { Wrapper, WrapperTittle } from "../../Themes/Wrapper.style"

export const TelaInicial = () => {

    return (
        <Wrapper>
            <Title>SUA SAÚDE</Title>
            <Title>NOSSA MISSÃO</Title>
            <WrapperTittle>
                <Button $primary>Agende agora</Button>
                <Button $primary>Saiba mais</Button>
            </WrapperTittle>
        </Wrapper>
    )
}