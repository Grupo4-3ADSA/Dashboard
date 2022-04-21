import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/DashGenerico";
import Login from "./pages/Login";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/home" exact element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;