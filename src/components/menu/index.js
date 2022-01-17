import {useContext,useState,useEffect} from "react"
import {CartContext} from "../../context/cartContext"

export default function Menu(){
    
    const {cart} = useContext(CartContext)
    const [numCart, setNumCart] = useState([])

   

    return <nav className="menu">
        <h1>Code Store</h1> 
        <span>Livros no Carrinho : <p> {cart} </p></span>
        </nav>
}