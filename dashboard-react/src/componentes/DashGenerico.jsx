import React from "react";
import '../html-css-template/css/style.css';
import LogoOnclnBranco from '../html-css-template/imagens/logo-branco.png';
import IconAvatar from '../html-css-template/imagens/usuario.png';
import IconConfig from '../html-css-template/imagens/configuracao.png';
import IconSino from '../html-css-template/imagens/sino.png';

function ItemNavbar(props) {
    return (
        <>
            <div clas="container">
                <div class="box-dashboard">
                    <div class="superior">
                        <div class="nav-superior-esquerda">
                            <img src={LogoOnclnBranco} alt="Logo" />
                        </div>
                        <div class="nav-superior">
                            <input class="input-field:first-child" type="text" placeholder="Pesquisar.." img />
                        </div>
                        <div class="nav-info">
                           <span>Olá fulano</span> 
                           <img class= "user" src={IconAvatar} alt="" />
                           <img class= "config" src={IconConfig} alt="" />
                           <img class= "config" src={IconSino} alt="" />
                        </div>
                    </div>

                    <div class="nav-esquerda">
                        <ul>
                            <li>Home</li>
                            <li>Cadastrar/Editar</li>
                            <li>Salas</li>
                            <li>Painel de controle</li>
                            <li>Consumo/equipamento</li>
                            <li>Relatório de fatura</li>
                            <li>Resumo de consumo</li>
                            <li>Central de ajuda</li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ItemNavbar;