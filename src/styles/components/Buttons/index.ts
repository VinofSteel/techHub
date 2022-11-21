import styled from "styled-components";

export const ButtonPrimary = styled.button `
    width: 90%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-primary);
    padding: 0 22px;
    border: 1px solid var(--color-primary);
    border-radius: 4px;

    font-weight: 500;
    font-size: 1rem;
    line-height: 26px;
    color: white;

    transition: 0.3s;

    cursor: pointer;

    :hover {
        background-color: var(--color-primary-focus);
        border: 1px solid var(--color-primary-focus);
    }
    
    @media all and (min-width: 425px) {
        font-size: 1.125rem;
    }
`

export const ButtonNegative = styled.button `
    width: 90%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-primary-negative);
    padding: 0 22px;
    border: 1px solid var(--color-primary-negative);
    border-radius: 4px;

    font-weight: 500;
    font-size: 1rem;
    line-height: 26px;
    color: white;

    transition: 0.3s;

    cursor: pointer;

    :hover {
        background-color: var(--color-primary-focus);
        border: 1px solid var(--color-primary-focus);
    }
    
    @media all and (min-width: 425px) {
        font-size: 1.125rem;
    }
`

export const ButtonDisable = styled.button `
    width: 90%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-gray-1);
    padding: 0 22px;
    border: 1px solid var(--color-gray-1);
    border-radius: 4px;

    font-weight: 500;
    font-size: 1rem;
    line-height: 26px;
    color: white;

    transition: 0.3s;

    cursor: pointer;

    :hover {
        background-color: var(--color-gray-2);
        border: 1px solid var(--color-gray-2);
    } 

    @media all and (min-width: 425px) {
        font-size: 1.125rem;
    }
`

export const ButtonDark = styled.button `
    width: 90%;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-gray-3);
    padding: 0 22px;
    border: 1px solid var(--color-gray-3);
    border-radius: 4px;

    font-weight: 600;
    font-size: 0.75rem;
    line-height: 28px;
    color: var(--color-gray-0);

    transition: 0.3s;

    cursor: pointer;

    :hover {
        background-color: var(--color-gray-2);
        border: 1px solid var(--color-gray-2);
    } 

    @media all and (min-width: 425px) {
        font-size: 1rem;
    }
`
