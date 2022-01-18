import {useContext,useState,useEffect} from "react"
import {CartContext} from "../../context/cartContext"
import { Link } from "react-router-dom"
import { MenuDiv, Menus } from "./styles"


export default function Menu(){
    
    const {cart} = useContext(CartContext)
    
    return  <Menus>
       <Link to={"/"}>
        <h1>Code Store</h1> 
       </Link>
            <MenuDiv>
            <p>Produtos no carrinho :</p>
            <Link to={"./cart"}>
            <span>{cart.length}</span> 
            </Link>
            </MenuDiv>
            </Menus>
           
}
