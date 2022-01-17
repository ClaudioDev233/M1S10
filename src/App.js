
import { Route, Routes } from 'react-router';
import './App.css';
import Menu from './components/menu';

import {CartProvider} from './context/cartContext/'

import Cart from './components/pages/cart';
import Details from './components/pages/details';
import Home from './components/pages/home';

function App() {
  return  <>
  <CartProvider>
  <Menu></Menu>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/details/:id" element={<Details/>}/>
  </Routes>
  </CartProvider>
  </>
}

export default App;
