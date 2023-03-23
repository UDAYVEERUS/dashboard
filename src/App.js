import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './components/products/Products';
import Navigation from './components/navigation/Navigation';
import Contacts from './components/contacts/Contacts';
import Categories from './components/categories/Categories';
import Users from './components/user/Users';
import Home from './components/home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/contacts" element={<Contacts />}></Route>
        <Route exact path="/categories" element={<Categories />}></Route>
        <Route exact path="/users" element={<Users />}></Route>
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
