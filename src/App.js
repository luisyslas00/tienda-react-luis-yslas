import ItemDetails from "./components/ItemDetail/index.js";
import ItemDetailsContainer from "./components/ItemDetail/ItemDetails.js";
import ItemListContainer from "./components/ItemListContainer/index.js";
import Navbar from "./components/Navbar/index.js";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailsContainer/>
    </div>
  );
}

export default App;