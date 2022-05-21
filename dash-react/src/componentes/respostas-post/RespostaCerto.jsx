import React from "react";
import '../../html-css-template/css/style-modais.css';

function RespostaDeuBom(props) {
    return (
        <>
            <div id="resposta" class="div-deu-certo">
                <h3>Cadastrado com sucesso!!!</h3>
                <button onClick={props.closeRespostaCerto} className="btn-close" >X</button>
            </div>
        </>
    )
}

export default RespostaDeuBom;