import React from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import Chart from '../componentes/Chart';
import ImgResumo from '../html-css-template/imagens/resumo-consumo.png'

function Resumo(props) {
    return (
        <>
            <div className="conteudo-chart">
                <div className="container-conteudo">
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
                        <button className="btn-box-select" >Cadastrar Sala</button>

                    </div>

                    <img src={ImgResumo} alt="" />

                </div>
                
            </div>
        </>
    )
}

export default Resumo;