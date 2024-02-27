import styled from "styled-components";

const LoginMain = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #789c54;
    color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default LoginMain

export const LoginContainer = styled.div`
    height: fit-content;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    max-width: 700px;
    min-height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Josefin Sans", sans-serif;
    -webkit-box-shadow: 10px 10px 9px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 9px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 9px 0px rgba(0,0,0,0.75);

    .image {
        width: 400px !important;
        height: 400px;
        border-radius: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        object-fit: contain;
    }
`

export const LoginForm = styled.form`
    padding: 3rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    align-items: center;
    max-width: 400px;
    font-size: 1.4rem;

    h4{
        margin-bottom: 1rem;
    }

    div {
        align-items: center;
        svg {
            position: absolute;
        }
        input {
            font-weight: bold;
        }
    }

    button {
        border: 3px solid #8cd0bc;
        color: #8cd0bc;
        transition: all .4s;

        &:hover{
            background-color: #8cd0bc;
            color: #222;
        }
    }
`

export const LoginEmailWrapper = styled.div`
    display: flex;
`

export const LoginPasswordWrapper = styled.div`
    display: flex;
`