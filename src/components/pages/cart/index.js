import { useContext } from "react"
import {CartContext} from "../../../context/cartContext"
import { Table, TableHead, TableRow } from "./styles"


export default function Cart(){

    const {cart , removeBook} = useContext(CartContext)
    
    const cartPrice = cart.map(valor => valor.price)
    
    return <> <span>
        { cartPrice.length >= 1 ? cartPrice.reduce((valor, valor2) => valor + valor2 ) : ''}
    </span>
       
    <Table>
    <TableHead>
        <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Subtotal</th>
            <th>Remove</th>
        </tr>
        </TableHead>
        <tbody>
    {cart.map(items => {
        return (
        <TableRow>
            <td><img src={items.image}></img></td>
            <td>{items.title}</td>
            <td>{items.price}</td>
            <td>
            <button
            onClick={()=>{removeBook(items.id)}}
            >Remover</button>
            </td>
        </TableRow>
    )})}
    </tbody>
    </Table>
    </>
}    