import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./componets/Header/Header";
import Home from "./componets/Home/Home";
import Login from "./componets/Login/Login";
import Register from "./componets/Register/Register";
import Product from "./componets/Product/Product";
import RequiredAuth from "./componets/RequiredAuth/RequiredAuth";
import Orders from "./componets/Orders/Orders";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="product" element={
          <RequiredAuth>
            <Product></Product>
          </RequiredAuth>
        }></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="orders"
          element={
            <RequiredAuth>
              <Orders></Orders>
            </RequiredAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
