import styled from "styled-components"
import { Button } from "../../Components/Button/button"
import { Title } from "../../Components/Text"

export const TelaInicial = () => {
    
    const paginaInic = styled.div`
        display: display-flex;
        justify-content: center;
        background: "white";
    `;

    return (
        <>
        <paginaInic>
            <Title>SUA SAÚDE</Title>
            <Title>NOSSA MISSÃO</Title>
            <div>
                <Button $primary>Agende agora</Button>
                <Button $primary>Saiba mais</Button>
            </div>
        </paginaInic>
        </>
    )
}