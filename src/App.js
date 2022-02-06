import './App.css';
import { BrowserRouter , Route , Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import ItemDetails from './components/ItemDetail';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/cartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/"/>
            <Route index element={<HomePage/>} />
            <Route path="about" element={<AboutPage/>}/>
            <Route path="products">
              <Route index  element={<ProductsPage/>}/>
              <Route path=":productId" element={<ItemDetails/>}/>
            </Route>
            <Route path="contact" element={<ContactPage/>}/>
            <Route path="cart" element={<CartPage/>}/>
          <Route/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;