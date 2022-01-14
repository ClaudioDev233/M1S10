import { useEffect, useState } from "react"



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
        {book.map(books => {
            return <>
            <div className="bookHolder">
            <div className="imgHolder">
                <img src={books.image}/>
            </div>
            <h1>{books.title}</h1>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(books.price)}</span>
            <button>Comprar</button>
             <button>Detalhes</button>
             </div>
            </>
        })}
        </>
   
 
}