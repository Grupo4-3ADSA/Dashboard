import React from "react";
import { useNavigate } from "react-router-dom";
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import Chart from '../componentes/consumo/Chart';
import TableConsumo from '../componentes/consumo/TableResumoConsumo';
import ImgVoltar from '../html-css-template/imagens/voltar.png';
import LogoOnclnBranco from '../html-css-template/imagens/img-logo/logo-branco.png';

function TableResumo(props) {
    const navigate = useNavigate();
    return (
        <>
            <div clas="container">

                <div class="superior">
                    <div class="nav-superior-esquerda">
                        <img src={LogoOnclnBranco} alt="Logo" />
                    </div>

                    <NavSupCentro />
                </div>

                <div class="container-dash">
                    <div class="nav-esquerda">
                        <NavEsquerdo />
                    </div>
                    <div class="conteudo">
                        <img className="voltar" onClick={() => navigate(-1)} src={ImgVoltar} alt="" />

                        <div className="conteudo-scroll conteudo-chart">

                            <h2 >Resumo de consumo Mensal</h2>
                            <Chart />

                            <h2 className="h2-titulo">Dados de consumo geral</h2>

                            <div classNameName="box-select">
                                <span>Mês:</span>
                                <select name="select-predio" className="select-menor">
                                    <img src="" alt="" />
                                    <option value="valor1" selected >Mês:</option>
                                    <option value="valor2">Janeiro</option>
                                    <option value="valor3">Fevereiro</option>
                                    <option value="valor3">Março</option>
                                    <option value="valor3">Abril</option>
                                    <option value="valor3">Maio</option>
                                    <option value="valor3">Junho</option>
                                    <option value="valor3">Julho</option>
                                    <option value="valor3">Agosto</option>
                                    <option value="valor3">Setembro</option>
                                    <option value="valor3">Outrubro</option>
                                    <option value="valor3">Novembro</option>
                                    <option value="valor3">Dezembro</option>
                                </select>
                                <button className="btn-box-select">Baixar relatório</button>
                                <button className="btn-box-select" onClick={() => window.print()}>Imprimir relatóio
                                </button>
                            </div>

                            <TableConsumo />

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TableResumo;