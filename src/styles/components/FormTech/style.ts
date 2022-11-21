import styled from "styled-components";

export const FormTechHeader = styled.div `
    height: 40px;
    width: 95%;
    max-width: 370px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 16px;

    background-color: var(--color-gray-2);
    border-radius: 4px 4px 0 0;

    animation: appearLeft 0.8s;

    h2 {
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 19px;
        color: var(--color-gray-0);
    }

    @keyframes appearLeft {
        0% {
            opacity: 0;
            transform: translateX(-50%);
        }

        100% {
            opacity: 1;
        }
    }

    button {
        font-weight: 600;
        font-size: 0.75rem;
        line-height: 21px;
        color: var(--color-gray-1);
        cursor: pointer;
        border: none;
        padding: 0;
    }
`

export const FormTechForm = styled.form `
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 9px 10px;
`