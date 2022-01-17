import { useParams } from "react-router"

export default function BookDetails(){

    const params = useParams()
     
    const handleDetails = async () => {
        const resp = await fetch (`http://localhost:3333/books/?${params.id}`)
    }

    return <>
    <div className="details__container">
        <div className="details__image">
        IMAGEM
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