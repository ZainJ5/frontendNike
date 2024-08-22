import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cartpage from './Pages/Cartpage'
import { createContext, useState } from 'react';
import Mainpage from './Pages/Mainpage';
import Category from './Pages/Category';
import Productpage from './Pages/Productpage';
import Checkout from './Pages/Checkout';
import AdminLogin from './Pages/AdminLogin';
import AdminPanel from './Pages/AdminPanel';
import Protected from './components/Protected';


export const globalData = createContext();

function App() {
  const [cart, setCart] = useState([])
  const [data, setData] = useState('');
  const [showSnack, setShowSnack] = useState(false);
  const [productPage, setProductPage] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <globalData.Provider value={{data, setData, cart, setCart,productPage,setProductPage,showSnack, setShowSnack}}>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/Men" element={<Category type="Men's Shoes & Sneakers" />} />
            <Route path="/Women" element={<Category type="Women's Shoes & Sneakers"/>} />
            <Route path="/Kids" element={<Category type="Kids' Shoes & Sneakers" />} />
            <Route path="/Collection" element={<Category type="Collection" />}/>
            <Route path="/Cart" element={<Cartpage />} />
            <Route path="/Product/:id" element={<Productpage/>} />
            <Route path="/Checkout" element={<Checkout/>} />
            <Route path="/Admin" element={<AdminLogin/>} />
            <Route path="/Adminpage" element={<Protected Component={AdminPanel}/>} />
          </Routes>
        </globalData.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;