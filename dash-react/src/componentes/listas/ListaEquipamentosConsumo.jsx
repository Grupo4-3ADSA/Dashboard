import React from "react";
import '../../html-css-template/css/style-global.css';

function ListaEquipamentos(props) {

    return (
        <>
            <li>
                <thead >
                    <tr>
                        <td class="td-lista">Ar condicionado</td>
                        <td class="td-lista">A</td>
                        <td class="td-lista">1°</td>
                        <td class="td-lista">Ligado</td>
                        <td class="td-lista" ><a href="/consumo-por-equipamento">Acessar</a> </td>
                    </tr>
                </thead>
            </li>

        </>
    )
}

export default ListaEquipamentos