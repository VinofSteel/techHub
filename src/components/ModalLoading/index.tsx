import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import PulseLoader from "react-spinners/ClipLoader";
import { StyledModalLoading } from "../../styles/components/ModalLoadingStyle/style";

export const ModalLoading = () => {

    const { loading } = useContext(UserContext)

    return (
        <>
        {loading 
        ?
        <StyledModalLoading
>
            <PulseLoader
                color={"#0F4FFE"}
                loading={loading}
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