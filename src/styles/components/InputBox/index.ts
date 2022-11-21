import styled from "styled-components";

export const InputBox = styled.div `
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;

    label {
        font-weight: 400;
        font-size: 0.6rem;
        color: var(--color-gray-0);
    }

    span {
        font-weight: 400;
        font-size: 0.8rem;
        color: var(--color-negative);
    }

    select {
        width: 100%;
        height: 48px;

        background-color: var(--color-gray-2);
        border: 1px solid var(--color-gray-2);
        border-radius: 4px;
        padding: 0px 16px;

        font-weight: 400;
        font-size: 1rem;
        line-height: 26px;

        :focus {
        outline: none;
        border: 1px solid var(--color-gray-0);
        color: var(--color-gray-0);
        }
    }

    @media all and (min-width: 425px) {
        label {
            font-size: 0.75rem;
        }

        span {
            font-size: 0.9rem;
        }
    }
`