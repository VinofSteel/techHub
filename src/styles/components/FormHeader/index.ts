import styled from "styled-components";

interface iHeaderProps {
    justify: string; 
}

export const Header = styled.header<iHeaderProps> `
    width: 90%;
    max-width: 370px;
    height: 20px;

    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: center;
    
    animation: appearLeft 0.8s;
    
    h1 {
        color: var(--color-primary);
        font-weight: 700;
        font-size: 1.3rem;
    }

    button {
        width: 40%;
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

    @media all and (min-width: 425px) {
        h1 {
            font-size: 1.6rem;
            font-weight: 700;
        }
    }
`