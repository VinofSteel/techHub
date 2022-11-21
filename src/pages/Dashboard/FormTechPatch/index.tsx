import { yupResolver } from "@hookform/resolvers/yup"
import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../../contexts/TechContext"
import { ButtonDisable, ButtonNegative } from "../../../styles/components/Buttons"
import { FormBackground } from "../../../styles/components/FormBackground"
import { FormTechForm, FormTechHeader } from "../../../styles/components/FormTech/style"
import { Input } from "../../../styles/components/Input"
import { InputBox } from "../../../styles/components/InputBox"
import { ButtonBox } from "./style"

interface iTechPut {
    status: string
}

interface iTech {
    element: {
        id: string;
        title: string;
        status?: string;
        created_at: string;
        updated_at: string;
    }
}


export const FormTechPatch = ({element}: iTech) => {

    const {toggleModalPatch, techFormPatchSchema, techPut, techDelete} = useContext(TechContext)

    const { register, handleSubmit, formState:{errors} } = useForm<iTechPut>({
        resolver: yupResolver(techFormPatchSchema)
    });


    return(
        <>
            <FormTechHeader>
                <h2>Tecnologia Detalhes</h2>
                <button onClick={() => toggleModalPatch()}>X</button>
            </FormTechHeader>

            <FormBackground height={330}>
                <FormTechForm onSubmit={handleSubmit(techPut)}>
                    <InputBox>
                        <label htmlFor="inputTitle">Nome do projeto</label>
                        <Input id="inputTitle" type="text" disabled placeholder={element.title} />
                    </InputBox>
                    <InputBox>
                        <label htmlFor="select">Status</label>
                        <select id="select"  {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <span>{errors.status?.message}</span>
                    </InputBox>
                        <ButtonBox>
                            <ButtonNegative className="negative" type="submit">Salvar Alterações</ButtonNegative>
                            <ButtonDisable className="positive" onClick={(event) => techDelete(event)}>Excluir</ButtonDisable>
                        </ButtonBox>
                </FormTechForm>       
            </FormBackground>
        </>
    )

}