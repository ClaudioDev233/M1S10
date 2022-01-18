import { useContext } from "react"
import {CartContext} from "../../../context/cartContext"


export default function Cart(){

    const {cart} = useContext(CartContext)
    
    const cartPrice = cart.map(valor => valor.price)
    
    return <> 
        <p>{cartPrice.reduce((total,atual) => {
            return total+atual
        })}</p>
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
            <td><button>Remover</button></td>
        </tr>
    )})}
    </table>
    </>
}