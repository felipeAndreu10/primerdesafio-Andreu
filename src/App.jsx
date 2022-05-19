import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Item.DetailContainer/index.jsx";
import Navbar from "./components/Navbar/Navbar.js";
import Carrito from "./views/Carrito/Carrito.js";
import Productos from "./views/Productos/Productos.js";
import Home from "./views/Home/Home.js";
import Mail from "./views/Mail/Mail.js";

function App() {
  return (
    <div className="App">
     <>
     <Navbar />
     <BrowserRouter>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Productos" element={<Productos />} />
        <Route exact path="/Carrito" element={<Carrito />} /> 
        <Route exact path="/Mail" element={<Mail />} /> 
      </Routes>
     </BrowserRouter>
     {/* <ItemDetailContainer /> */}
     </>
    </div>
  );
}

export default App;
