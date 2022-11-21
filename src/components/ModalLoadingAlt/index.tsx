import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import PulseLoader from "react-spinners/ClipLoader";
import { StyledModalLoading } from "../../styles/components/ModalLoadingStyle/style";

export const ModalLoadingAlt = () => {

    const { loadingAlt } = useContext(UserContext)

    return (
        <>
        {loadingAlt 
        ?
        <StyledModalLoading
>
            <PulseLoader
                color={"#0F4FFE"}
                loading={loadingAlt}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </StyledModalLoading>
        :
        null}
        </>
    )
}