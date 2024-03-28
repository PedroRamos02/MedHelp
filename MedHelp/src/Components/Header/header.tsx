import { WrapperHeader, WrapperIconTittle } from "../../Themes/Wrapper.style"
import { Button2 } from "../Button/button"
import { SubTitle } from "../Text"

export const Header = () =>{
    return (
        <WrapperHeader>
            <WrapperIconTittle>
                <img src="logo_medhelp.png"/>
                <SubTitle>MedHelp</SubTitle>
            </WrapperIconTittle>
            <div>
                <Button2 $primary >Home</Button2>
                <Button2>Sobre</Button2>
                <Button2>Contato</Button2>
            </div>
            <div>
                <Button2>Login</Button2>
                <Button2>Cadastro</Button2>
            </div>
        </WrapperHeader>  
    )
}
