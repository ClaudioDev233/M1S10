import styled from "styled-components";

export const Bookshelf = styled.div`
    padding: 20px;
    display:flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: lightblue ;
    justify-content: center;
`;

export const BookHolder = styled.div`
    max-width: 280px;
    height: fit-content;
    background-color: aliceblue;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-bottom: 10px;
`;

export const ImgHolder = styled.img`
    max-width: 280px;
    max-height: 395px;
`;

export const BookInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5px;

    p {
    font-size: 25px;
    font-weight: bold;
    }

    span {
    font-size: 20px;
    color:rgb(100, 100, 223);
    }
`;

export const BooksButton = styled.button`
    background-color: navy;
    color: aliceblue;
    border-radius: 5px;
    border: none;
    height: 20px;

    &:hover{
        background-color: lightblue;
        cursor: pointer;
    }
`;