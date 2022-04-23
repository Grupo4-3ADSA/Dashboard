import React from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import Chart from '../componentes/Chart'


function Resumo(props) {
    return (
        <>
            <div className="container-conteudo">
                <h2 className="h2-titulo">Relatório de consumo</h2>

                <Chart />
            </div>
        </>
    )
}

export default Resumo;