import React from "react";
import {useNavigate} from "react-router-dom";
import '../html-css-template/css/style-global.css';
import ImgNovoAgendamento from '../html-css-template/imagens/novo-agendamento.png';
import ImgAgendamentoMarcado from '../html-css-template/imagens/agendamento-marcado.png';
import ImgEmUso from '../html-css-template/imagens/em-uso.png';
import NavSupEsquerdo from '../componentes/navbar/NavSupEsquerdo';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import ImgDesfazer from '../html-css-template/imagens/desfazer.png';

function PainelDeControle(props) {
    const navigate = useNavigate();
    return (
        <>
            <div clas="container">
                <div class="superior">
                    <NavSupEsquerdo />
                    <NavSupCentro />
                </div>
                <div class="nav-esquerda">
                    <NavEsquerdo />
                </div>

                <div class="conteudo">
                    <img onClick={() => navigate(-1)} src={ImgDesfazer} alt="" />
                    <h2>Painel de controle</h2>
                    <div className="btns-direcionar">
                        <div className="direcionar">
                            <img src={ImgNovoAgendamento} alt="" />
                            <h4>Novo agendamento</h4>
                        </div>
                        <div className="direcionar">
                            <img src={ImgAgendamentoMarcado} alt="" />
                            <h4>Agendamento Marcado</h4>
                        </div>
                        <div className="direcionar">
                            <img src={ImgEmUso} alt="" />
                            <h4>Em uso</h4>
                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default PainelDeControle;