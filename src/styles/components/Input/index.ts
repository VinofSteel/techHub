import styled from "styled-components";

export const Input = styled.input `
    width: 90%;
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

        ::placeholder {
        color: var(--color-gray-0);
        opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--color-gray-0);
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--color-gray-0);
        }

        :focus::placeholder {
            color: var(--color-gray-0);
            opacity: 1; /* Firefox */
        }

        :focus:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--color-gray-0);
        }

        :focus::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--color-gray-0);
        }
    }

    ::placeholder {
        color: var(--color-gray-4);
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--color-gray-4);
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--color-gray-4);
    }

    :focus::placeholder {
        color: var(--color-gray-4);
        opacity: 1; /* Firefox */
    }

    :focus:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--color-gray-4);
    }

    :focus::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--color-gray-4);
    }

    @media all and (min-width: 425px) {
        font-size: 1.125rem;
    }
`