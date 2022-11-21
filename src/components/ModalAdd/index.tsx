import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext";
import { StyledModal } from "../../styles/components/ModalStyle/style"

interface iModalProps {
    children: React.ReactNode;
}

export const ModalAdd = ({children}: iModalProps) => {

    const { modalAdd } = useContext(TechContext)

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