import React from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import ImgNovoAgendamento from '../html-css-template/imagens/novo-agendamento.png';
import ImgAgendamentoMarcado from '../html-css-template/imagens/agendamento-marcado.png';
import ImgEmUso from '../html-css-template/imagens/em-uso.png';

function PainelDeControle(props) {
    return (
        <>
            <div className="container-conteudo">
                <h2 className="h2-titulo">Painel de controle</h2>
                <div className="btns-direcionar">
                    <div className="btn-dorecionar">
                        <img src={ImgNovoAgendamento} alt="" />
                        <h4>Novo agendamento</h4>
                    </div>
                    <div className="btn-dorecionar">
                        <img src={ImgAgendamentoMarcado} alt="" />
                        <h4>Agendamento Marcado</h4>
                    </div>
                    <div className="btn-dorecionar">
                        <img src={ImgEmUso} alt="" />
                        <h4>Em uso</h4>
                    </div>

                </div>
            </div>
        </>


    )
}

export default PainelDeControle;