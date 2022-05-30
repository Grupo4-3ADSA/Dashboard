import React from "react";
import '../../html-css-template/css/style-global.css';

function SelectEquipamento() {

    return (
        <>
            <select name="select-sala" >
                <img src="" alt="" />
                <option value="valor1" selected >Selecione um equipamento</option>
                <option value="Ar-Condicionado">Ar-Condicionado</option>
                <option value="Conjunto de lâmpadas">Conjunto de lâmpadas</option>
                <option value="Conjunto de tomadas">Conjunto de tomadas</option>
            </select>
        </>
    )

}

export default SelectEquipamento;