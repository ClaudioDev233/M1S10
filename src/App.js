
import { Route, Routes } from 'react-router';
import './App.css';
import Books from './components/books';

import Cart from './components/pages/cart';
import Details from './components/pages/details';
import Home from './components/pages/home';

function App() {
  return  <>
  
  
<Books>
</Books>







  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/details/:id" element={<Details/>}/>
  </Routes>
  
  </>
}

export default App;
