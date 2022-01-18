import styled from "styled-components";

export const Details__Container = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    background-color: aliceblue;
    padding: 20px;
    gap:20px;
    border-radius: 10px;
`;

export const Deitails__Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2{
        font-size: 35px;
        font-weight: bold;
    }

    h3{
        font-size: 30px;
        font-weight: bold;
        color: navy;
    }

    p{
        width: 500px;
        height: 250px;
        padding-bottom: 30px;
        text-align: justify;
    }

    button{
        width: fit-content;
        height: 40px;
        align-self: center;
        background-color: navy;
        color: aliceblue;
        border: none;

        &:hover{
         cursor: pointer;
         background-color: lightblue;
        }
    }
`

export const Container = styled.div`
background-color: lightblue;
height: 100vh;
padding: 20px;
`;