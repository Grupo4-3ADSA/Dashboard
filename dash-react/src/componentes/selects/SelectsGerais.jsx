import React from "react";
import '../../html-css-template/css/style-global.css';

function SelectsPageSalas(props) {

    return (
        <>
            <select name="select-andar" className="select-menor">
                <option value="valor1" selected >Selecione o andar</option>
                {props.floor}
            </select>
            <select name="select-sala" className="select-menor">
                <option value="valor1" selected >Selecione a sala</option>
                {props.name}
            </select>
        </>
    )
}
 
export default SelectsPageSalas;