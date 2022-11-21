import styled from "styled-components";

export const DashContainer = styled.div`
    height: 840px;
    width: 100vw;

    margin: 0 auto;

    display: flex;
    flex-direction: column;

    @media all and (min-width: 768px) {
        width: 80%;
    }
`

export const DashNav = styled.nav`
    width: 90%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 3vh auto;

    h1 {
        color: var(--color-primary);
        font-weight: 700;
        font-size: 1.3rem;
    }

    button {
        width: 55px;
    }

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

    @media all and (min-width: 425px) {
        h1 {
        font-size: 1.6rem;
        font-weight: 700;
        }

        button {
        width: 70px;
        }
    }
`

export const DashHeader = styled.header`
    height: 130px;
    width: 90%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

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

export const DashHeaderDiv = styled.div`
    height: 130px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    background-color: var(--color-gray-4);
    border-radius: 4px;

    transition: 0.3s;

    animation: appear 0.8s;

    h2 {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 28px;
        color: var(--color-gray-0);
    }

    h3 {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 22px;
        color: var(--color-gray-2);
        transition: 0.3s;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @media all and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

export const DashBorder = styled.div `
    height: 1px;
    width: 100vw;

    background-color: var(--color-gray-2);

    z-index: 0;

    animation: appear 0.8s;

    @media all and (min-width: 768px) {
        position: relative;
        left: -10vw;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`

export const DashAddTech = styled.section `
    height: 20px;
    width: 90%;

    margin: 20px auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 22px;

    background-color: var(--color-gray-4);
    border-radius: 4px;

    animation: appearLeft 0.8s;

    h3 {
        font-weight: 600;
        font-size: 1rem;
        line-height: 18px;
        color: white;
    }

    .button__addTech {
        width: 32px;
        height: 32px;

        padding: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-gray-3);
        border-radius: 4px;

        font-weight: 600;
        font-size: 1rem;
        line-height: 26px;
        color: white;

        transition: 0.3s;

        cursor: pointer;

        :hover {
            background-color: var(--color-gray-2);
        } 
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
`

export const DashTechList = styled.ul `
    height: 500px;
    width: 90%;

    margin: 0 auto;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    background-color: var(--color-gray-3);
    padding: 22px 19px;
    border-radius: 4px;

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

export const DashTechListCard = styled.li `
    height: 50px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    background-color: var(--color-gray-4);
    padding: 12px;
    border-radius: 4px;

    transition: 0.3s;

    cursor: pointer;

    h3 {
        font-weight: 700;
        font-size: 0.8rem;
        line-height: 24px;
        color: var(--color-gray-0);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    div span {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 22px;
        color: var(--color-gray-1);
    }

    div button {
        cursor: pointer;
        padding: 0;
        color: rgba(255, 255, 255, 0.8);
    }

    animation: appear 0.8s;

    @keyframes appear {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    :hover {
        background-color: var(--color-gray-2);
    }

    @media all and (min-width: 425px) {
        div {
            gap: 20px;
        }
    }
`