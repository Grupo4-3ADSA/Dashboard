import React from "react";

function ListaEquipamentos(props) {
    return (
        <>
            <li>
                <thead>
                    <tr>
                        <td class="td-lista">Ar-Condicionado</td>
                        <td class="td-lista">Sala de Reuniões</td>
                        <td class="td-lista">1</td>
                        <td class="td-lista-editar-deletar">
                            <button className="editar" onClick={() => props.update(`${props.name}`, `${props.idRoom}`, `${props.floor}`)} >
                                Editar/</button>
                            <button className="deletar" onClick={() => props.delete(`${props.idRoom}`)}>Deletar</button>
                        </td>
                        <td class="td-lista"><a href="/painel-controle-salas">Acessar</a> </td>
                    </tr>
                </thead>
            </li>
        </>
    )
}

export default ListaEquipamentos