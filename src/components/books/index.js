import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export default function Books(){

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
    <div className="bookshelf">
        {book.map(books => {
            return <>
            <div className="bookHolder">
            <div className="imgHolder">
                <img src={books.image}/>
            </div>
            <div className="book-info">
            <p>{books.title}</p>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(books.price)}</span>
            <button className="books-button">Comprar</button>
            <Link 
            to={`./details/${books.id}`}
            >
                <button className="books-button">Detalhes</button>
            </Link>
             </div>
             </div>
            </>
        })}
        </div>
        </>
   
 
}