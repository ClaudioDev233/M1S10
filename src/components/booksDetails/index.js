import { useParams } from "react-router"
import { useState, useEffect} from "react"
export default function BookDetails(){

    const [bookData, setBookData] = useState([])

    const params = useParams()
     

    useEffect(() =>{
        const handleDetails = async () => {
            const resp = await fetch (`http://localhost:3333/books/${params.id}`)
            const data = await resp.json()
            console.log(data)
            setBookData(data)
        }
        handleDetails()
    }, [params.id])
    
    return <>
    <div className="details__container">
        <div className="details__image">
        <img src={bookData.image}/>
        </div>
        <div className="details__content">
            <h2 className="details__name">Nome</h2>
            <h3 className="details__price"> Preço </h3>
            <p className="details__description">blablabla</p>
            <button className="details__button">Adicionar</button>
        </div>
    </div>
    </>
}