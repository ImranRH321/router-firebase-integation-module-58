import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from "./componets/Header/Header";
import Home from "./componets/Home/Home";
import Login from "./componets/Login/Login";
import Register from "./componets/Register/Register";
import Product from "./componets/Product/Product";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="product" element={<Product></Product>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};

export default App;
