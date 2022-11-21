import styled from "styled-components";

export const StyledLoginForm = styled.form `
    height: 100%;
    width: 100%;

    margin-top: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
        font-weight: 700;
        font-size: 0.85rem;
        line-height: 22px;
        color: var(--color-gray-0);
    }

    @media all and (min-width: 425px) {
        h2 {
            font-size: 1.2rem;
        }
    }
`

export const StyledLoginNavigate = styled.div `
    width: 100%;

    margin-top: 7px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;

    background-color: var(--color-gray-3);
    border-radius: 3px;
    box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);

    span {
        font-weight: 600;
        font-size: 0.6rem;
        line-height: 14px;
        color: var(--color-gray-1);
    }

    @media all and (min-width: 425px) {
        span {
            font-size: 0.75rem;
        }
    }
`