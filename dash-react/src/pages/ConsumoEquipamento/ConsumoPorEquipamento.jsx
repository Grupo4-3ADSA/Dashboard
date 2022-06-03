import React from "react";
import '../../html-css-template/css/style-global.css';
import { useNavigate } from 'react-router-dom';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgDesVoltar from '../../html-css-template/imagens/voltar.png';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-branco.png';
import ChartConsumo from '../../componentes/consumo/ChartEquipamentoConsumo';


function ConsumoPorEquioamento() {
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
                        <img className="voltar" onClick={() => navigate(-1)} src={ImgDesVoltar} alt="" />

                        <h2>Ar Condicionado</h2>
                        <div className="centro">
                            <div className="chart-consumo">
                                <h3>Dados de consumo do equipamento do último mês</h3>
                                <ChartConsumo />
                            </div>
                        </div>

                        <div className="centro">
                            <div className="info-consumo">
                                <h4>Informações do equipamento</h4>
                                <h6>Vida útil: 750 dias</h6>
                                <h6>Temperatura do equipamento: 20º</h6>
                                <h6>Data de instalação: 28/02/2022</h6>
                                <h6>Voltagem: 220v</h6>
                                <h5>Desligar | Ligar</h5>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"/*  onClick={() => (atualizar(1))} */></span>
                                </label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ConsumoPorEquioamento;