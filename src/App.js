import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './components/products/Products';
import Navbar from './components/navbar/Navbar';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        {/* <Route exact path="/" element={<Navbar />}></Route> */}
        
        <Route exact path="/home" element={<Navigation />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
