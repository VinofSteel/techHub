import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledModal } from "../../styles/components/ModalStyle/style"

interface iModalProps {
    children: React.ReactNode;
}

export const ModalPatch = ({children}: iModalProps) => {


    const { modalPatch } = useContext(UserContext)

    return (
        <>
        {modalPatch 
        ?
        <StyledModal>
            {children}
        </StyledModal>
        :
        null}
        </>
    )
}