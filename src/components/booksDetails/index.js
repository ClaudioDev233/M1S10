import { useParams } from "react-router"
import { useState, useEffect, useContext} from "react"
import { CartContext } from "../../context/cartContext"
import { Details__Container, Deitails__Content, Container } from "./styles"

export default function BookDetails(){

    const [bookData, setBookData] = useState([])

    const params = useParams()
     
    const { addBook } = useContext(CartContext)

    useEffect(() =>{
        const handleDetails = async () => {
            const resp = await fetch (`http://localhost:3333/books/${params.id}`)
            const data = await resp.json()
            console.log(data)
            setBookData(data)
        }
        handleDetails()
    }, [])
    
    return <>
    <Container>
    <Details__Container>
        <div className="details__image">
        <img src={bookData.image}/>
        </div>
        <Deitails__Content>
            <h2 >{bookData.title}</h2>
            <h3> <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(bookData.price)}</span> </h3>
            <p>{bookData.description}</p>
            <button onClick={()=>{addBook(bookData)}}>Adicionar ao Carrinho</button>
        </Deitails__Content>
        </Details__Container>
        </Container>
    </>
}