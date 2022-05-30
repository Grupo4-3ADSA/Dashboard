import React from "react";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-modais.css';
import atencao from '../../html-css-template/imagens/img-list/atencao.png';

function ListaSalas(props) {
    return (
        <>
            <li>
                <thead>
                    <tr>
                        <td class="td-lista">{props.name}</td>
                        <td class="td-lista">{props.floor}</td>
                        <td class="td-lista"><img src={atencao} alt="" /></td>
                        <td class="td-lista-editar-deletar">
                            <button className="editar" onClick={() => props.update(`${props.name}`,`${props.idRoom}`,`${props.floor}`)} >
                                Editar/</button>
                            <button className="deletar" onClick={() => props.delete(`${props.idRoom}`)}>Deletar</button>
                        </td>
                        <td class="td-lista"><a href="/painel-controle-salas">Acessar</a> </td>
                    </tr>
                </thead>
            </li>

            {/*  {showModalEditar ? <ModalEditar /> : <></>} */}

        </>
    )

}

export default ListaSalas;