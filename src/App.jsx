import ItemListContainer from './components/ItemListContainer/index';
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div className="App">
     <>
     <Navbar />
     <ItemListContainer texto='Felipe'/>
     </>
    </div>
  );
}

export default App;
