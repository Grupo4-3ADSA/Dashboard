import React from "react";

function ListaEquipamentos(props) {
    return (
        <>

            <li>
                <thead >
                    <tr>
                        <td class="td-lista">{props.name}</td>
                        <td class="td-lista">A</td>
                        <td class="td-lista">{props.floor}</td>
                        <td class="td-lista">Ligado</td>
                        <td class="td-lista"><a href="/">Acessar</a> </td>
                    </tr>
                </thead>
            </li>

        </>
    )
}

export default ListaEquipamentos