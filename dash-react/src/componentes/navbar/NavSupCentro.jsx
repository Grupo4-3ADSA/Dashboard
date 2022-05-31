import React, { useState } from "react";
import '../../html-css-template/css/style-global.css';
import IconAvatar from '../../html-css-template/imagens/img-info-user/usuario.png';
import IconConfig from '../../html-css-template/imagens/img-info-user/configuracao.png';
import IconSino from '../../html-css-template/imagens/img-info-user/sino.png';
import { useNavigate } from "react-router-dom";

function ItemNavSupCen(props) {

    const nome = sessionStorage.nomeGestor

    const navigate = useNavigate()

    function logoff() {
        sessionStorage.clear()
        navigate("/")
    }

    return (
        <>
            <div class="nav-superior-central">
                <input class="input-field:first-child" type="text" placeholder="Pesquisar.." img />
            </div>

            <div class="nav-info">
                <span>{nome}</span>
                <img class="user" src={IconAvatar} alt="" />
                <img class="config" src={IconConfig} alt="" />
                <img class="config" src={IconSino} alt="" />
            </div>
        </>
    )
}

export default ItemNavSupCen;