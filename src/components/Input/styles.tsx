import styled from "styled-components";

export const InputMain = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    color: #222;

    label{
        top: -8px;
        transform: translate(-50%, 0);
        left: 50%;
        position: absolute;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #fff;
        color: #222;
        padding: .2rem .5rem;
        border-radius: 5px;
        text-transform: uppercase;
    }

    input{
        background-color: transparent;
        text-align: center;
        width: fit-content;
        min-width: 30rem;
        border: 3px solid #222;
        border-radius: 10px;
        padding: 1.2rem .5rem;
        font-size: 1.4rem;
        color: #222;

        &::placeholder {
            color: #777;
        }

        &:disabled {
            background-color: transparent;
            border: 2px solid #f52b2b;
        }
    }
`