import styled from "styled-components";

export const StyledRegisterForm = styled.form `
    height: 100%;
    width: 100%;

    margin-top: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .formTitle {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 22px;

        h2 {
            font-weight: 700;
            font-size: 1rem;
            line-height: 22px;
            color: var(--color-gray-0);
        }

        h3 {
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 22px;
            color: var(--color-gray-1);
        }
    }


    @media all and (min-width: 425px) {
        .formTitle {
            h2 {
                font-size: 1.2rem;
            }

            h3 {
                font-size: 0.9rem;
            }
        }
        
    }
`