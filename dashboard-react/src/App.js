import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ApplicationRoutes from "./routes";
import Login from "../src/componentes/Login";
import Dash from '../src/componentes/DashGenerico'
import Home from '../src/componentes/HomeDash'
import Salas from '../src/componentes/Salas'

function App() {

    return (
        <>
            <ApplicationRoutes />
        </>
    );

}

export default App;