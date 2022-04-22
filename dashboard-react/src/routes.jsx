import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import RotaHome from "./pages/DashGenerico";
import RotaSalas from "./componentes/Salas";
import RotaCadastrarEditar from "./componentes/CadastrareEditar";
import RotaPainelControle from "./componentes/PainelControle";
import RotaConsumoEquipamento from "./componentes/ConsumoEquipamento";
import RotaRelatorioFatura from "./componentes/RelatoriaFatura";
import RotaResumoConsumo from "./componentes/ResumoConsumo";
import RotaCentralAjuda from "./componentes/CentralAjuda";


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/home" exact element={<RotaHome />} />
                <Route path="/salas" exact element={<RotaSalas />} />
                <Route path="/cadastroedicao" exact element={<RotaCadastrarEditar/>} />
                <Route path="/painel-controle" exact element={<RotaPainelControle/>} />
                <Route path="/consumo-equipamento" exact element={<RotaConsumoEquipamento/>} />
                <Route path="/relatorio-fatura" exact element={<RotaRelatorioFatura/>} />
                <Route path="/resumo-consumo" exact element={<RotaResumoConsumo/>} />
                <Route path="/central-ajuda" exact element={<RotaCentralAjuda/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;