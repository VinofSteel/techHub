import React, { useContext } from "react"
import { TechContext } from "../../contexts/TechContext";
import { StyledModal } from "../../styles/components/ModalStyle/style"

interface iModalProps {
    children: React.ReactNode;
}

export const ModalPatch = ({children}: iModalProps) => {


    const { modalPatch } = useContext(TechContext)

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