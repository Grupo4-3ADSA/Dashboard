import React from "react";
import '../../html-css-template/css/style-global.css';

function SelectSalas() {

    return (
        <>
            <select name="select-predio" className="select-maior">
                <img src="" alt="" />
                <option value="valor1" selected >Predio 1 - Haddock Lobo 595</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <select name="select-andar" className="select-menor">
                <option value="valor1" selected >Andar</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <select name="select-sala" className="select-menor">
                <option value="valor1" selected >Sala</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
        </>
    )

}

export default SelectSalas;