import React, { Key } from "react";
import { createContext, useEffect, useState } from "react";
import { Path, RelativeRoutingType, To, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup"
import { AnyObject, Assign, ObjectShape } from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";
import { api, iAxiosResponse, iAxiosError } from "../services/api";

// Interfaces e Types
interface iUserProps {
    children: React.ReactNode;
}

interface iNavigateFunction {
  (
    to: To,
    options?: {
      replace?: boolean;
      state?: any;
      relative?: RelativeRoutingType;
    }
  ): void;
  (delta: number): void;
}

interface iLocation extends Path {
    state: unknown;
    key: Key;
  }

interface iLoginFunction {
    email: string;
    password: string;
}

interface iRegisterFunction {
    email: string;
    password?: string;
    confirm_password?: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
}

interface iTechPut {
    status: string
}

interface iTechSubmitFunction extends iTechPut {
    title: string
}

interface iUserContext {
    id: string | null;
    token: string | null;
    navigate: iNavigateFunction;
    user: iUserEmpty;
    setUser: React.Dispatch<React.SetStateAction<iUser | iUserEmpty>>
    loginFormSchema: yup.ObjectSchema<Assign<ObjectShape, {
        email: RequiredStringSchema<string | undefined, AnyObject>;
        password: RequiredStringSchema<string | undefined, AnyObject>;
    }>>;
    loginSubmitFunction: (data: iLoginFunction) => Promise<void>;
    registerFormSchema: yup.ObjectSchema<Assign<ObjectShape, {
        name: RequiredStringSchema<string | undefined, AnyObject>;
        email: RequiredStringSchema<string | undefined, AnyObject>;
        password?: RequiredStringSchema<string | undefined, AnyObject>;
        confirm_password?: RequiredStringSchema<string | undefined, AnyObject>;
        course_module: RequiredStringSchema<string | undefined, AnyObject>;
        contact: RequiredStringSchema<string | undefined, AnyObject>;
        bio: RequiredStringSchema<string | undefined, AnyObject>;
    }>>;
    registerSubmitFunction: (data: iRegisterFunction) => Promise<void>
    modalAdd: boolean;
    toggleModalAdd: () => void;
    techFormSchema: yup.ObjectSchema<Assign<ObjectShape, {
        title: RequiredStringSchema<string | undefined, AnyObject>;
        status: RequiredStringSchema<string | undefined, AnyObject>;
    }>>;
    techSubmitFunction: (data: iTechSubmitFunction) => Promise<void>;
    techDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>
    modalPatch: boolean;
    toggleModalPatch: () => void;
    identification: string;
    setIdentification: React.Dispatch<React.SetStateAction<string>>;
    techFormPatchSchema: yup.ObjectSchema<Assign<ObjectShape, {
        status: RequiredStringSchema<string | undefined, AnyObject>;
    }>>;
    techPut: (data: iTechPut) => Promise<void>;
    loading: boolean;
    loadingAlt: boolean;
}

interface iTech {
    id: string;
    title: string;
    status?: string;
    created_at: string;
    updated_at: string;
}

interface iWork extends iTech {
    deploy_url: string;
    description: string;
}

interface iUser extends iRegisterFunction {
    id: string;
    created_at: string;
    updated_at: string;
    avatar_url: string;
    techs: iTech[];
    works: iWork[];
}

interface iUserEmpty {
    id?: string;
    created_at?: string;
    updated_at?: string;
    avatar_url?: string;
    techs?: iTech[];
    works?: iWork[];
    email?: string;
    password?: string;
    confirm_password?: string;
    name?: string;
    bio?: string;
    contact?: string;
    course_module?: string;
}

interface iLoginResponse {
    user: iUser;
    token: string;
}


// Context
export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({children}: iUserProps) => {
    // Variáveis e hooks para autologin
    const id = localStorage.getItem("@kenziehub:id")
    const token = localStorage.getItem("@kenziehub:token")
    const location: iLocation = useLocation()
    
    // Variáveis e hooks de uso geral
    const navigate: iNavigateFunction = useNavigate()
    const [user, setUser] = useState<iUser | iUserEmpty>({} as iUser | {} as iUserEmpty)
    const [identification, setIdentification] = useState<string>("")
    const [modalAdd, setModalAdd] = useState<boolean>(false)
    const [modalPatch, setModalPatch] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingAlt, setLoadingAlt] = useState<boolean>(false)

    // useEffect para autologin
    useEffect(() => {
        async function loadUser () {
            if (token) {
                try {
                    if (location.pathname !== "/dashboard") {
                        navigate("/dashboard")
                    }
                    const res: iAxiosResponse<iUser> = await api.get<iUser>(`/users/${id}`)
                    setUser(res.data)
                } catch (err: unknown) {
                    toast.error("Ops! Algo deu errado! Faça seu login novamente.", { theme: "dark" })
                    localStorage.clear()
                    navigate("/")
                } finally {
                    setLoading(false)
                }
            } else if (!token && location.pathname === "/dashboard") {
                toast.error("Você não está autenticado. Faça seu login!", { theme: "dark" })
                navigate("/")
            }
        }

        loadUser()
    })

    // Login
    const loginFormSchema = yup.object().shape({
        email: yup.string().required("O campo email é obrigatório!").email("Email inválido"),
        password: yup.string().required("O campo senha é obrigatório!")
    })

    async function loginSubmitFunction (data: iLoginFunction) {
        setLoadingAlt(true)

        try {
           const res: iAxiosResponse<iLoginResponse> = await api.post<iLoginResponse>("/sessions", data)
            setUser(res.data.user)
            window.localStorage.setItem("@kenziehub:token", res.data.token)
            window.localStorage.setItem("@kenziehub:id", res.data.user.id)
            navigate("/dashboard")
        } catch (error) {
            const err = error as iAxiosError
            if (err.response?.data.message === "Incorrect email / password combination") {
                toast.error("Email ou senha incorretos!", { theme: "dark" });
            } else {
                toast.error("Ops! Algo deu errado!", { theme: "dark" });
            }
        } finally {
            setLoadingAlt(false)
        }
    }

    // Register
    const registerFormSchema = yup.object().shape({
        name: yup.string().required("O campo nome é obrigatório."),
        email: yup.string().required("O campo email é obrigatório.").email("O email inserido é inválido."),
        password: yup.string().required("O campo senha é obrigatório.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Sua senha deve conter ao menos oito carateres, um dígito, uma letra maiúscula, uma letra minúscula e pelo menos um caractere especial."),
        confirm_password: yup.string().required("A confirmação de senha é obrigatória.").oneOf([yup.ref('password '), null], "Este campo deve ser igual ao campo de senha."),
        bio: yup.string().required("O campo bio é obrigatório."),
        contact: yup.string().required("O campo contato é obrigatório."),
        course_module: yup.string().required("O campo selecionar módulo é obrigatório."),
    })

    async function registerSubmitFunction (data: iRegisterFunction) {
        delete data.confirm_password
        setLoadingAlt(true)

        try {
            await api.post<void>("/users", data)
            toast.success("Conta criada com sucesso!", { theme: "dark" })
            navigate("/")
        } catch (error) {
            const err = error as iAxiosError
            if (err.response?.data.message === "Email already exists") {
                toast.error("Email já cadastrado!", { theme: "dark" });
            } else {
                toast.error("Ops! Algo deu errado!", { theme: "dark" });
            } 
        } finally {
            setLoadingAlt(false)
        }
    }

    // Add tecnologia
    const toggleModalAdd = () => {
        setModalAdd(state => !state)
    }

    const techFormSchema = yup.object().shape({
        title: yup.string().required("O campo nome é obrigatório!"),
        status: yup.string().required("O campo selecionar status é obrigatório!")
    })

    async function techSubmitFunction (data: iTechSubmitFunction) {
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
                toast.error("Ops! Algo deu errado!", { theme: "dark" })
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

    async function techPut (data: iTechPut) {
        setLoading(true)
        try {
            await api.put<void>(`/users/techs/${identification}`, data)
            toast.success("Tecnologia alterada com sucesso!", { theme: "dark" })
            toggleModalPatch()
        } catch (error) {
            const err = error as iAxiosError
            console.error(err)
            toast.error("Ops! Algo deu errado! Tente novamente mais tarde.", { theme: "dark" })
            toggleModalPatch()
        } finally {
            setLoading(false)
        }
    }

    // Delete tecnologia
    async function techDelete (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        setLoading(true)
        try {
            await api.delete<void>(`/users/techs/${identification}`)
            toast.success("Tecnologia deletada!", { theme: "dark" })
            toggleModalPatch()
        } catch (error) {
            const err = error as iAxiosError
            console.error(err)
            toast.error("Ops! Algo deu errado!", { theme: "dark" })
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <UserContext.Provider value=
        {
            {id,
             token,
             navigate,
             user,
             setUser,
             loginFormSchema,
             loginSubmitFunction,
             registerFormSchema,
             registerSubmitFunction,
             modalAdd,
             toggleModalAdd,
             techFormSchema,
             techSubmitFunction,
             techDelete,
             modalPatch,
             toggleModalPatch,
             identification,
             setIdentification,
             techFormPatchSchema,
             techPut,
             loading,
             loadingAlt
             }
            }>
            {children}
        </UserContext.Provider>
    )
}