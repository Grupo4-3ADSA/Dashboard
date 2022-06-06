import React from "react";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-modais.css';

function ListaSalas(props) {
    return (
        <>



            <li>
                <thead>
                    <tr>
                        <td class="td-lista maior">{props.idCLNBox}</td>
                        <td class="td-lista maior">Sala de reuniões</td>
                        <td class="td-lista maior">2</td>
                        <td class="td-lista-editar-deletar maior">
                            <button className="editar" onClick={() => props.update(`${props.name}`, `${props.idRoom}`, `${props.floor}`)} >
                                Editar/</button>
                            <button className="deletar" onClick={() => props.delete(`${props.idRoom}`)}>Deletar</button>
                        </td>
                    </tr>
                </thead>
            </li>

            {/*  {showModalEditar ? <ModalEditar /> : <></>} */}

        </>
    )

}

export default ListaSalas;