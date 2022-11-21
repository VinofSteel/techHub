import { Container } from "../../styles/components/Container"
import { Header } from "../../styles/components/FormHeader";
import { FormBackground } from "../../styles/components/FormBackground"
import { ButtonNegative, ButtonDark } from "../../styles/components/Buttons";
import { InputBox } from "../../styles/components/InputBox";
import { useForm } from "react-hook-form";
import { Input } from "../../styles/components/Input";
import { StyledRegisterForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalLoadingAlt } from "../../components/ModalLoadingAlt";

interface iRegister {
    email: string;
    password?: string;
    confirm_password?: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
}

export const Register = () => {
    const {navigate, registerFormSchema, registerSubmitFunction, loadingAlt} = useContext(UserContext)

    const { register, handleSubmit, formState:{errors} } = useForm<iRegister>({
        resolver: yupResolver(registerFormSchema)
    });

    if (loadingAlt) {
        return (
            <ModalLoadingAlt/>
        )
    } else {
        return (
            <Container height={1300} marginTop={0} gap={30}>
                <Header justify="space-between">
                    <h1>Tech Hub</h1>
                    <ButtonDark onClick={() => navigate("/")}>Voltar</ButtonDark>
                </Header>
    
                <FormBackground height={1100}>
                    <StyledRegisterForm onSubmit={handleSubmit(registerSubmitFunction)}>
                        <div className="formTitle">
                            <h2>Crie sua conta</h2>
                            <h3>Rápido e grátis, vamos nessa!</h3>
                        </div>
                        <InputBox>
                            <label htmlFor="inputName">Nome</label>
                            <Input id="inputName" type="text" placeholder="Digite aqui o seu nome" {...register("name")} />
                            <span>{errors.name?.message}</span>
                        </InputBox>
    
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
    
                        <InputBox>
                            <label htmlFor="inputConfPassword">Confirmar Senha</label>
                            <Input id="inputConfPassword" type="password" placeholder="Confirme sua senha" {...register("confirm_password")}/>
                            <span>{errors.confirm_password?.message}</span>
                        </InputBox>
    
                        <InputBox>
                            <label htmlFor="inputBio">Bio</label>
                            <Input id="inputBio" type="text" placeholder="Fale sobre você" {...register("bio")} />
                            <span>{errors.bio?.message}</span>
                        </InputBox>
    
                        <InputBox>
                            <label htmlFor="inputContact">Contato</label>
                            <Input id="inputContact" type="text" placeholder="Opção de contato" {...register("contact")} />
                            <span>{errors.contact?.message}</span>
                        </InputBox>
    
                        <InputBox>
                            <label htmlFor="select">Selecionar módulo</label>
                            <select id="select" {...register("course_module")}>
                                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                            </select>
                            <span>{errors.course_module?.message}</span>
                        </InputBox>
    
                        <ButtonNegative type="submit">Cadastrar</ButtonNegative>
    
                    </StyledRegisterForm>
                </FormBackground>
            </Container>
        )
    }
}