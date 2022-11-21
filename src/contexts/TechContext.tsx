import { createContext, useContext, useState } from "react";
import * as yup from "yup"
import { iTechSubmitFunction, iTechPut, iTechContext, iTechProps } from "../interfaces";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { api, iAxiosError } from "../services/api";

export const TechContext = createContext({} as iTechContext)

export const TechProvider = ({ children }: iTechProps) => {
    const {setLoading, identification} = useContext(UserContext)

    const [modalAdd, setModalAdd] = useState<boolean>(false)
    const [modalPatch, setModalPatch] = useState<boolean>(false)
    
    // Add tecnologia
    const toggleModalAdd = () => {
        setModalAdd(state => !state)
    }

    const techFormSchema = yup.object().shape({
        title: yup.string().required("O campo nome é obrigatório!"),
        status: yup.string().required("O campo selecionar status é obrigatório!")
    })

    const techSubmitFunction = async (data: iTechSubmitFunction) => {
        setLoading(true)
        try {
            await api.post<void>("/users/techs", data)
            toast.success("Tecnologia cadastrada com sucesso!", { theme: "dark" })
            toggleModalAdd()
        } catch (error) {
            const err = error as iAxiosError
            if (err.response?.data.message === "User Already have this technology created you can only update it") {
                toast.error("Tecnologias não podem possuir o mesmo nome!", { theme: "dark" });
            } else {
                console.error(err)
                alert("Algo deu errado nos servidores! Tente novamente!")
                window.location.reload()
            }
        } finally {
            setLoading(false)
        }
    }
    
    // Patch tecnologia
    const toggleModalPatch = () => {
        setModalPatch(state => !state)
    }

    const techFormPatchSchema = yup.object().shape({
        status: yup.string().required("Selecione o novo status.")
    })

    const techPut = async (data: iTechPut) => {
        setLoading(true)
        try {
            await api.put<void>(`/users/techs/${identification}`, data)
            toast.success("Tecnologia alterada com sucesso!", { theme: "dark" })
            toggleModalPatch()
        } catch (error) {
            const err = error as iAxiosError
            console.error(err)
            alert("Algo deu errado nos servidores! Tente novamente!")
            window.location.reload()
        } finally {
            setLoading(false)
        }
    }

    // Delete tecnologia
    const techDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setLoading(true)
        try {
            await api.delete<void>(`/users/techs/${identification}`)
            toast.success("Tecnologia deletada!", { theme: "dark" })
            toggleModalPatch()
        } catch (error) {
            const err = error as iAxiosError
            console.error(err)
            alert("Algo deu errado nos servidores! Tente novamente!")
            window.location.reload()
        } finally {
            setLoading(false)
        }
    }

    return (
        <TechContext.Provider value=
        {
            {modalAdd,
            toggleModalAdd,
            techFormSchema,
            techSubmitFunction,
            techDelete,
            modalPatch,
            toggleModalPatch,
            techFormPatchSchema,
            techPut
             }
            }>
            {children}
        </TechContext.Provider>
    )
}