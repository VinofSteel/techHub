import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../../contexts/UserContext"
import { ButtonPrimary } from "../../../styles/components/Buttons"
import { FormBackground } from "../../../styles/components/FormBackground"
import { Input } from "../../../styles/components/Input"
import { InputBox } from "../../../styles/components/InputBox"
import { FormTechForm, FormTechHeader } from "../../../styles/components/FormTech/style"
import { yupResolver } from "@hookform/resolvers/yup"

interface iTech {
    status: string;
    title: string;
}

export const FormTech = () => {
    const { toggleModalAdd, techSubmitFunction, techFormSchema } = useContext(UserContext)
    const { register, handleSubmit, formState:{errors} } = useForm<iTech>({
        resolver: yupResolver(techFormSchema)
    });
    
    return (
        <>
            <FormTechHeader>
                <h2>Cadastrar Tecnologia</h2>
                <button onClick={() => toggleModalAdd()}>X</button>
            </FormTechHeader>
            <FormBackground height={330}>
                <FormTechForm onSubmit={handleSubmit(techSubmitFunction)}>
                    <InputBox>
                        <label htmlFor="inputTitle">Nome</label>
                        <Input id="inputTitle" type="text" placeholder="Nome da tecnologia" {...register("title")} />
                        <span>{errors.title?.message}</span>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="select">Selecionar status</label>
                        <select id="select" {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <span>{errors.status?.message}</span>
                    </InputBox>
                    <ButtonPrimary type="submit">Cadastrar Tecnologia</ButtonPrimary>
                </FormTechForm>       
            </FormBackground>
        </>
    )
}