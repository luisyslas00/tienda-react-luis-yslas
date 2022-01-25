import './App.css';
import { BrowserRouter , Route , Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"/>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<AboutPage/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;