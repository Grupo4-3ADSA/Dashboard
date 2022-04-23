import React from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';


function Central(props) {
    return (
        <>
            <div>
                <h2 className="h2-titulo">Central de ajuda</h2>

                <div className="container-central">
                    <h3>Informações de contato</h3>
                    <h5>Email: contato@autg.com.br</h5>
                    <h5>Telefone: (11) 0000-1111</h5>
                    <button className="btn-box-select">Suporte 24 horas</button>
                    <h3>Manuais de instruções</h3>
                    <button class= "btn-central">Manual de instalação</button>
                    <button>Manual de utilozação da dashboard</button>
                </div>
            </div>
        </>
    )
}

export default Central;