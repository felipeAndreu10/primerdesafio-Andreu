import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Item.DetailContainer/index.jsx";
import Navbar from "./components/Navbar/Navbar.js";
import Carrito from "./views/Carrito/Carrito.js";
import Home from "./views/Home/Home.js";
import ItemListContainer from "./components/ItemListContainer";
import CartProvider from "./Context/CartContext"



function App() {
  return (
    
     <>
     <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/Productos' element={<ItemListContainer />} />
        <Route exact path='/Carrito' element={<Carrito />} /> 
        <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      </Routes>
     </CartProvider> 
     </BrowserRouter>
     
     </>

  );
}

export default App;
