import React, { useEffect, useState } from "react";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-modais.css';

import ModalEditar from '../modais/ModalCadastro'
import Api from '../../Api'

function ListaSalas() {
    /* const [props, setProps] = useState(""); */
    document.getElementById('cadastro').style.display = "none"

    function AbreModalEditar() {
        document.getElementById('cadastro').style.display = "block"
    }

    return (
        <>
            <ModalEditar id='cadastro' />
            <li>
                <thead >
                    <tr>
                        <td class="td-lista">a</td>
                        <td class="td-lista">a</td>
                        <td class="td-lista"><img alt="" /></td>
                        <td class="td-lista-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => AbreModalEditar()} className="editar" >Editar|</button>
                            <button className="deletar" >Deletar</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td class="td-lista"><a href="/">Acessar</a> </td>
                    </tr>
                </thead>
            </li>

        </>
    )

}

export default ListaSalas;