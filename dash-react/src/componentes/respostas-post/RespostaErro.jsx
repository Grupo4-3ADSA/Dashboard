import React from "react";
import '../../html-css-template/css/style-modais.css';

function RespostaDeuRuim(props) {
    return (
        <>
            <div id="resposta" class=" div-deu-erro">
                <h3>Erro ao cadastrar</h3>
                <button onClick={props.closeRespostaErro} className="btn-close" >X</button>
            </div>
        </>
    )
}

export default RespostaDeuRuim;