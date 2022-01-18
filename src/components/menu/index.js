import {useContext,useState,useEffect} from "react"
import {CartContext} from "../../context/cartContext"
import { Link } from "react-router-dom"


export default function Menu(){
    
    const {cart} = useContext(CartContext)
    
    return <nav className="menu">
       <Link to={"/"}>
        <h1>Code Store</h1> 
       </Link>
            <Link to={"./cart"}>
            <span>{cart}</span> 
            </Link>
            <p>Produtos no carrinho</p>
        </nav>
}
