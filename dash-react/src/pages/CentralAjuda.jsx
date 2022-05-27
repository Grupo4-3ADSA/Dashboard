import React from "react";
import { useNavigate } from "react-router-dom";
import '../html-css-template/css/style-global.css';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import ImgDesfazer from '../html-css-template/imagens/desfazer.png';
import LogoOnclnBranco from '../html-css-template/imagens/logo-branco.png';

function Central(props) {
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
                            <h2>Central de ajuda</h2>

                            <div className="container-central">
                                <h3>Informações de contato</h3>
                                <h5>Email: contato@autg.com.br</h5>
                                <h5>Telefone: (11) 0000-1111</h5>
                                <button className="btn-box-select">Suporte 24 horas</button>
                                <h3>Manuais de instruções</h3>
                                <button class="btn-central">Manual de instalação</button><br /><br />
                                <button className="btn-central-maior">Manual de utilização da dashboard</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Central;