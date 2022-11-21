import styled from "styled-components";

interface iFormBackgroundProps {
    height: number
}

export const FormBackground = styled.div<iFormBackgroundProps> `
    height: ${({height}) => height}px;
    width: 95%;
    max-width: 370px;

    border-radius: 3px;
    box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);

    background-color: var(--color-gray-3);

    animation: appearLeft 0.8s;

    @keyframes appearLeft {
    0% {
        opacity: 0;
        transform: translateX(-50%);
    }

    100% {
        opacity: 1;
    }
}
`