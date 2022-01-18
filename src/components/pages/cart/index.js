import { useContext } from "react"
import {CartContext} from "../../../context/cartContext"


export default function Cart(){

    const {cart , removeBook} = useContext(CartContext)
    
    const cartPrice = cart.map(valor => valor.price)
    
    return <> <span>
        { cartPrice.length >= 1 ? cartPrice.reduce((valor, valor2) => valor + valor2 ) : ''}
    </span>
       
    <table>
    <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Subtotal</th>
            <th>Botão Remover</th>
        </tr>
    {cart.map(items => {
        return (
        <tr>
            <td><img src={items.image}></img></td>
            <td>{items.title}</td>
            <td>{items.price}</td>
            <td><button
            onClick={()=>{removeBook(items.id)}}
            >Remover</button></td>
        </tr>
    )})}
    </table>
    </>
}    