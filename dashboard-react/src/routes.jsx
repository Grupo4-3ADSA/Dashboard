import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import RotaDashGenerico from "./pages/DashGenerico";
import RotaSalas from "./componentes/listas/ListaSalas";
import RotaCadastrarEditar from "./componentes/CadastrareEditar";
import RotaPainelControle from "./componentes/PainelControle";
import RotaConsumoEquipamento from "./componentes/ConsumoEquipamento";
import RotaResumoConsumo from "./componentes/ResumoConsumo";
import RotaCentralAjuda from "./componentes/CentralAjuda";
import Rota from "./componentes/CentralAjuda";


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/dash-generico" exact element={<RotaDashGenerico />} />
                <Route path="/salas" exact element={<RotaSalas />} />
                <Route path="/cadastroedicao" exact element={<RotaCadastrarEditar />} />
                <Route path="/painel-controle" exact element={<RotaPainelControle />} />
                <Route path="/consumo-equipamento" exact element={<RotaConsumoEquipamento />} />
                <Route path="/resumo-consumo" exact element={<RotaResumoConsumo />} />
                <Route path="/central-ajuda" exact element={<RotaCentralAjuda />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;