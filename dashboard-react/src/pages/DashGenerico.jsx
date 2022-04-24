import React, { useState } from "react";
import '../html-css-template/css/style.css';
import LogoOnclnBranco from '../html-css-template/imagens/logo-branco.png';
import IconAvatar from '../html-css-template/imagens/usuario.png';
import IconConfig from '../html-css-template/imagens/configuracao.png';
import IconSino from '../html-css-template/imagens/sino.png';
import ConteudoHome from '../componentes/HomeDash';
import ConteudoCadastrar from '../componentes/CadastrareEditar';
import ConteudoPainel from '../componentes/PainelControle';
import ConteudoConsumo from '../componentes/ConsumoEquipamento';
import ConteudoResumo from '../componentes/ResumoConsumo';
import ConteudoCentral from '../componentes/CentralAjuda';
import ConteudoSalas from "../componentes/Salas";

function ItemNavbar(props) {

    const [conteudo, setConteudo] = useState([<ConteudoHome />]);

    const data = [{
        "name": ["Home", "Cadastrar/Editar", "Salas", "Painel de Controle",
            "Consumo/Equipamento", "Resumo de Consumo", "Central de Ajuda"]
    }]
    const listItems = data.map((d) => <ul>{d.name.map((a) => <li key={a} onClick={() => clicado(a)}>{a}</li>)} </ul>)
    
    clicado(props.componente)
    
    function clicado(element) {
        switch (element) {
            case "Home":
                setConteudo(<ConteudoHome />)
                break;

            case "Cadastrar/Editar":
                setConteudo(<ConteudoCadastrar />)
                break;

            case "Salas":
                setConteudo(<ConteudoSalas />)
                break;

            case "Painel de Controle":
                setConteudo(<ConteudoPainel />)
                break;

            case "Consumo/Equipamento":
                setConteudo(<ConteudoConsumo />)
                break;

            case "Resumo de Consumo":
                setConteudo(<ConteudoResumo />)
                break;

            case "Central de Ajuda":
                setConteudo(<ConteudoCentral />)
                break;

            default:
                break;
        }
    }

    return (
        <>
            <div clas="container">
                <div class="box-dashboard">
                    <div class="superior">
                        <div class="nav-superior-esquerda">
                            <img src={LogoOnclnBranco} alt="Logo" />
                        </div>
                        <div class="nav-superior-central">
                            <input class="input-field:first-child" type="text" placeholder="Pesquisar.." img />
                        </div>
                        <div class="nav-info">
                            <span>Olá fulano</span>
                            <img class="user" src={IconAvatar} alt="" />
                            <img class="config" src={IconConfig} alt="" />
                            <img class="config" src={IconSino} alt="" />
                        </div>
                    </div>

                    <div class="container-dash">
                        <div class="nav-esquerda">
                            <ul class="list-nav-esqueda">
                                {listItems}
                            </ul>
                        </div>
                        <div class="conteudo">
                            {conteudo}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemNavbar;