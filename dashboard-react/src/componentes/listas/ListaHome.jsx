import React, { useState, useEffect } from "react";
import '../../html-css-template/css/style.css';
import '../../html-css-template/css/style.css';
import '../../html-css-template/css/style-componentes.css';

import ImgAlerta from '../../html-css-template/imagens/atencao.png';

function ListaHome(props) {
    return (
        <>
            <li className="li-box-salas"><img src={ImgAlerta} alt="" /><h3>Sala {props.name} <br /> Andar {props.floor}</h3> </li>
        </>
    )
}

export default ListaHome;