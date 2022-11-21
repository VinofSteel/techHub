import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup"
import { iLocation, iNavigateFunction, iUser, iUserProps, iUserContext, iUserEmpty, iLoginFunction, iLoginResponse, iRegisterFunction} from "../interfaces";
import { api, iAxiosResponse, iAxiosError } from "../services/api";

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({children}: iUserProps) => {
    // Variáveis e hooks para autologin
    const id = localStorage.getItem("@kenziehub:id")
    const token = localStorage.getItem("@kenziehub:token")
    const { pathname }: iLocation = useLocation()
    
    // Variáveis e hooks de uso geral
    const navigate: iNavigateFunction = useNavigate()
    const [user, setUser] = useState<iUser | iUserEmpty>({} as iUser | {} as iUserEmpty)
    const [identification, setIdentification] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingAlt, setLoadingAlt] = useState<boolean>(false)

    // useEffect para autologin
    useEffect(() => {
        const loadUser = async () => {
                try {
                    const {data}: iAxiosResponse<iUser> = await api.get<iUser>(`/users/${id}`)
                    setUser(data)
                } catch (err: unknown) {
                    toast.error("Ops! Algo deu errado! Faça seu login novamente.", { theme: "dark" })
                    localStorage.clear()
                    navigate("/")
                } finally {
                    setLoading(false)
                }
        }

        if (token && pathname !== "/dashboard") {
            navigate("/dashboard")
        }

        if (!token && pathname === "/dashboard") {
            toast.error("Você não está autenticado. Faça seu login!", { theme: "dark" })
            navigate("/")
        }

        if (token && pathname === "/dashboard") {
            loadUser()
        }
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

    const registerSubmitFunction = async (data: iRegisterFunction) => {
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
             identification,
             setIdentification,
             loading,
             setLoading,
             loadingAlt,
             setLoadingAlt
             }
            }>
            {children}
        </UserContext.Provider>
    )
}