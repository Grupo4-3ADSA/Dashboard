import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemNavbar from "../componentes/DashGenerico";
import Home from "../componentes/HomeDash";
import Login from "../componentes/Login";
import Salas from "../componentes/Salas";

function ApplicationRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/salas" element={<ItemNavbar />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )

}

export default ApplicationRoutes;