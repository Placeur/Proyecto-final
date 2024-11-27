import React from "react";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";

function App() {
  
  return (
    
    <BrowserRouter>

    <CartProvider>
    <NavBar cartCount={5} title="BMW"></NavBar>
    <Routes>
      <Route exact path='/' element={<ItemListContainer greetings={"Autos BMW"} />} />
      <Route path='/category/categoryid/' element={<ItemListContainer />} />
      <Route path='/category/:id' element={<About />} />
      <Route path='/item/:id' element={<Contact />} />
      <Route path='*' element={<Error />} />
      <Route path='/detail/:productId' element={<ItemDetailContainer/>} />

      <Route path='/'/>

    </Routes>
    </CartProvider>

    </BrowserRouter>
  )
}

export default App;
