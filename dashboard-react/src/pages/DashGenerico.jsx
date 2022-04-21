import React, {useState} from "react";
import '../html-css-template/css/style.css';
import LogoOnclnBranco from '../html-css-template/imagens/logo-branco.png';
import IconAvatar from '../html-css-template/imagens/usuario.png';
import IconConfig from '../html-css-template/imagens/configuracao.png';
import IconSino from '../html-css-template/imagens/sino.png';
import Home from '../componentes/HomeDash'
import Salas from '../componentes/Salas'

function ItemNavbar(props) {

    const [conteudo, setConteudo] = useState([<Home />]);

    const data = [{ "name": ["Home", "Cadastrar/Editar", "Salas", "Painel de Controle", "Consumo/Equipamento", "Relatorio de Fatura", "Resumo de Consumo", "Central de Ajuda"] }]
    const listItems = data.map((d) => <ul>{d.name.map((a) => <li key={a} onClick={() => clicado(a)}>{a}</li>)} </ul>)

    function clicado(element) {
        switch (element) {
            case "Home":
                console.log("FOI O HOME")
                setConteudo(<Home />)
                break;

            case "Cadastrar/Editar":
                console.log("FOI O CADASTRAR")

                break;

            case "Salas":
                console.log("FOI O salas")
                setConteudo(<Salas />)
                break;

            case "Painel de Controle":
                console.log("FOI O PAINEL")
                break;

            case "Consumo/Equipamento":
                console.log("FOI O CONSUMO")
                break;

            case "Relatorio de Fatura":
                console.log("FOI O RELATORIO")
                break;

            case "Resumo de Consumo":
                console.log("FOI O RESUMO")
                break;

            case "Central de Ajuda":
                console.log("FOI O AJUDA")
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
                            <ul>
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