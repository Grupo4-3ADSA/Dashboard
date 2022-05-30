import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import HomeDash from "./pages/HomeDash"
import CadastraEdita from "./pages/Cadastros/CadastrarEditar";
import Salas from "./pages/Salas";
import PainleDeControle from "./pages/PainelControle/PainelDeControle";
import ConsumoEquipamento from "./pages/ConsumoEquipamento";
import ResumoConsumo from "./pages/ResumoConsumo";
import CentralAjuda from "./pages/CentralAjuda";
import Equipamentos from "./pages/Cadastros/Equipamentos";
import OnClnbox from "./pages/Cadastros/OnClnBox";
import AgendamentoMarcado from "./pages/PainelControle/AgendamentoMarcado";

import PainleDeControleSalas from "./pages/PainelControle/PainelControleSalas";

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
                <Route path="/painel-controle-salas" exact element={<PainleDeControleSalas />} />
                <Route path="/equipamentos" exact element={<Equipamentos />} />
                <Route path="/on-cln-box" exact element={<OnClnbox />} />
                <Route path="/painel-de-controle-agendamento-marcado/" exact element={<AgendamentoMarcado />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;