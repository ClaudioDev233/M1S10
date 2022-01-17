import BookDetails from "../../booksDetails";
import { useContext } from "react";
import {CartContext} from '../../../context/cartContext'


export default function Details(){
    
    const {coiso} = useContext(CartContext)
    return <> <p>{coiso}</p>
    <BookDetails></BookDetails>
    </>
}