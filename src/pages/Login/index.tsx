import { useForm } from "react-hook-form";
import { ButtonPrimary, ButtonDisable } from "../../styles/components/Buttons";
import { FormBackground } from "../../styles/components/FormBackground";
import { Header } from "../../styles/components/FormHeader";
import { Input } from "../../styles/components/Input";
import { StyledLoginForm, StyledLoginNavigate } from "./style";
import { yupResolver } from "@hookform/resolvers/yup"
import { Container } from "../../styles/components/Container";
import { InputBox } from "../../styles/components/InputBox";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalLoadingAlt } from "../../components/ModalLoadingAlt";

interface iLogin {
    email: string;
    password: string;
}

export const Login = () => {
    const {navigate, loginFormSchema, loginSubmitFunction, loadingAlt} = useContext(UserContext)
    
    const { register, handleSubmit, formState:{errors} } = useForm<iLogin>({
        resolver: yupResolver(loginFormSchema)
    });

    if (loadingAlt) {
        return (
            <ModalLoadingAlt/>
        )
    } else {
        return (
            <Container height={600} marginTop={12} gap={20}>
                <Header justify="center">
                    <h1>Tech Hub</h1>
                </Header>
    
                <FormBackground height={500}>
                    <StyledLoginForm onSubmit={handleSubmit(loginSubmitFunction)}>
                        <h2>Login</h2>
                        <InputBox>
                            <label htmlFor="inputEmail">Email</label>
                            <Input id="inputEmail" type="text" placeholder="Digite aqui o seu email" {...register("email")} />
                            <span>{errors.email?.message}</span>
                        </InputBox>
    
                        <InputBox>
                            <label htmlFor="inputPassword">Senha</label>
                            <Input id="inputPassword" type="password" placeholder="Digite aqui a sua senha" {...register("password")} />
                            <span>{errors.password?.message}</span>
                        </InputBox>
    
                        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
    
                        <StyledLoginNavigate>
                            <span>Ainda não possui uma conta?</span>
                            <ButtonDisable onClick={() => navigate("/register")}>Cadastre-se</ButtonDisable>
                        </StyledLoginNavigate>
                    </StyledLoginForm>
                </FormBackground>
            </Container>
        );
    }
};
