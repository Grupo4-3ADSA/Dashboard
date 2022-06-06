import React from "react";
import '../../html-css-template/css/style-global.css';

function ListaSalas(props) {
    return (
        <>
<<<<<<< HEAD
=======



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
>>>>>>> 9b0eafac318973add3b63cd96a0771b99ae38424

            <li className="li-box-salas">
                <h5>
                    Id Cln: {props.idCLNBox}<br />
                    Sala {props.nameSala} <br />
                    Andar {props.floor}
                </h5>
            </li>

        </>
    )

}

export default ListaSalas;