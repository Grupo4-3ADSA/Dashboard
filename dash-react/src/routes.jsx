import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import HomeDash from "./pages/HomeDash"
import CadastraEdita from "./pages/CadastraEdita";
import Salas from "./pages/Salas";
import PainleDeControle from "./pages/PainelDeControle";
import ConsumoEquipamento from "./pages/ConsumoEquipamento";
import ResumoConsumo from "./pages/ResumoConsumo";
import CentralAjuda from "./pages/CentralAjuda";
import Modal from "./componentes/modais/ModalCadastro";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/home" exact element={<HomeDash />} />
                <Route path="/cadastra-edita" exact element={<CadastraEdita />} />
                <Route path="/salas" exact element={<Salas />} />
                <Route path="/painel-controle" exact element={<PainleDeControle />} />
                <Route path="/consumo-equipamento" exact element={<ConsumoEquipamento />} />
                <Route path="/resumo-consumo" exact element={<ResumoConsumo />} />
                <Route path="/central-ajuda" exact element={<CentralAjuda />} />
                
                <Route path="/modal" exact element={<Modal />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;