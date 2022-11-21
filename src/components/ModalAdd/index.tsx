import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledModal } from "../../styles/components/ModalStyle/style"

interface iModalProps {
    children: React.ReactNode;
}

export const ModalAdd = ({children}: iModalProps) => {

    const { modalAdd } = useContext(UserContext)

    return (
        <>
        {modalAdd 
        ?
        <StyledModal>
            {children}
        </StyledModal>
        :
        null}
        </>
    )
}