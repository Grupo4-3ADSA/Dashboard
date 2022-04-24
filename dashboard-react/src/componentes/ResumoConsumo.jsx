import React from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import '../html-css-template/css/style-table.css';
import Chart from '../componentes/Chart';
import TableConsumo from '../componentes/TableResumoConsumo'

function Resumo(props) {
   
    return (
        <>
            <div className="conteudo-chart">
                <h2 className="h2-titulo">Relatório de consumo</h2>
                <Chart />
                <h2 className="h2-titulo">Dados de consumo geral</h2>

                <div classNameName="box-select">

                    <select name="select-predio" className="select-maior">
                        <img src="" alt="" />
                        <option value="valor1" selected >Predio 1 - Haddock Lobo 595</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                    <button className="btn-box-select">Baixar relatório</button>
                    <button className="btn-box-select" onClick={()=>window.print()}>Imprimir</button>


                </div>

                <TableConsumo/>

            </div>

        </>
    )
}

export default Resumo;