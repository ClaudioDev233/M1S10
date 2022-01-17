import { createContext, useState } from 'react'

/* 
  COMO CRIAR UM CONTEXTO 
  1 - Importar createContext do react
  2 - atribui createContext para uma variável
    Ex: export const CartContext = createContext([]);
  3 - Criar o Provider
  4 - Importar o Provider no App.js
  5 - Consumir o contexto usando o useContex 
  ...
*/

export const CartContext = createContext([]);

export function CartProvider({children}){
   
    const [cart, setCart] = useState([]);


    function handleAddBook(book){

        alert("Livro Adicionado")
        setCart([... cart, book])
        /* console.log(cart) */

    }
    console.log(cart.length)

    const coiso = "oi"

    return (
    <CartContext.Provider 
    value={{
        cart: cart.length,
        coiso: coiso,
        addBook : handleAddBook
    }}
    >
        {children}
    </CartContext.Provider>
    )
}
