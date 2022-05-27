import React, { useState } from "react";
import '../../html-css-template/css/style-global.css';
import IconAvatar from '../../html-css-template/imagens/usuario.png';
import IconConfig from '../../html-css-template/imagens/configuracao.png';
import IconSino from '../../html-css-template/imagens/sino.png';

function ItemNavSupCen(props) {
    return (
        <>
            <div class="nav-superior-central">
                <input class="input-field:first-child" type="text" placeholder="Pesquisar.." img />
            </div>

            <div class="nav-info">
                <span>Olá fulano</span>
                <img class="user" src={IconAvatar} alt="" />
                <img class="config" src={IconConfig} alt="" />
                <img class="config" src={IconSino} alt="" />
            </div>
        </>
    )
}

export default ItemNavSupCen;