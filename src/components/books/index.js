import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import { Bookshelf, BookHolder, ImgHolder, BookInfo, BooksButton } from "./styles"


export default function Books(){

    const {addBook} = useContext(CartContext)

    const [book, setBook] = useState([])

    useEffect(()=>{
        async function handleGetBook(){
            const resp = await fetch('http://localhost:3333/books')
            const data = await resp.json()
            
            setBook(data)
        }
        handleGetBook()
    },[])

    return <>
    <Bookshelf>
        {book.map(books => {
            return <>
            <BookHolder>
                <ImgHolder src={books.image}/>
            <BookInfo>
            <p>{books.title}</p>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(books.price)}</span>
            <BooksButton onClick={() => addBook(books)}>Comprar</BooksButton>
            <Link 
            to={`./details/${books.id}`}
            >
                <BooksButton>Detalhes</BooksButton>
            </Link>
             </BookInfo>
             </BookHolder>
            </>
        })}
        </Bookshelf>
        </>
   
 
}