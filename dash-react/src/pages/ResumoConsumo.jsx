import React from "react";
import {useNavigate} from "react-router-dom";
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import Chart from '../componentes/consumo/Chart';
import TableConsumo from '../componentes/consumo/TableResumoConsumo';
import ImgDesfazer from '../html-css-template/imagens/desfazer.png';
import LogoOnclnBranco from '../html-css-template/imagens/logo-branco.png';

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
    <img className="voltar" onClick={() => navigate(-1)} src={ImgDesfazer} alt="" />

        <div className="conteudo-chart">
            
            <h2 >Resumo de consumo Mensal</h2>
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
                <button className="btn-box-select" onClick={() => window.print()}>Imprimir</button>


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