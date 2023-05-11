import Home from "./Page/Home"
import Products from "./Page/Products"
import Prices from "./Page/Prices"
import NotFound from "./Page/NotFound"
import Product from "./Page/Product"
import Invoices from "./Page/Invoices"
import TestUseEffect from "./components/TestUseEffect"
import { Routes, Route, Link } from "react-router-dom"
// https://github.com/kietnguyen0211/UseEffectAndRouter.git
export default function App(){
  return(
    <div>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/product">Products</Link> </li>
        <li> <Link to="/prices">Prices</Link> </li>
        <li> <Link to="/invoices" >Invoices</Link> </li>
      </ul>
      <TestUseEffect/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/product" element={<Products/>} >
            <Route path=":id" element={<Product/>}></Route>
        </Route>
        <Route path="/prices" element={<Prices/>} ></Route>
        <Route path="/*" element={<NotFound/>} ></Route>
        <Route path="/invoices" element={<Invoices/>} ></Route>
      </Routes>
    </div>
  );
}