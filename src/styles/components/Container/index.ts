import styled from "styled-components";

interface iContainerProps {
    height: number;
    gap: number;
    marginTop: number
}

export const Container = styled.div<iContainerProps> `
    height: ${({height}) => height}px;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({gap}) => gap}px;

    margin-top: ${({marginTop}) => marginTop}vh;
`