import React from "react";
import { useNavigate } from "react-router-dom";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-list.css';
import apiCln from '../../Api'
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgDesfazer from '../../html-css-template/imagens/desfazer.png';
import LogoOnclnBranco from '../../html-css-template/imagens/logo-branco.png';

function PainelSalas(props) {
    const navigate = useNavigate();

    function atualizar(IdEquipamento) {
        if (typeof IdEquipamento !== "undefined") {

            apiCln.ApiCln.get(`atividade-luz-sala/${IdEquipamento}`, {
            })
                .then(() => {
                    console.log("Atualizado com sucesso")
                })
        }
    }

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
                        <h2 >Sala: A | Andar: 1º</h2>
                        <div className="list organiza-lista">
                            <table className="table-lista">
                                <li className="title-lista">
                                    <thead>
                                        <tr>
                                            <th >Equipamento</th>
                                            <th >Potência</th>
                                            <th >Estado</th>
                                            <th >Ação</th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                </li>
                                <li>
                                    <thead >
                                        <tr>
                                            <td class="td-lista">Ar Condicionado</td>
                                            <td class="td-lista">24.000btu</td>
                                            <td class="td-lista">Ligado</td>
                                            <td class="td-lista"> <div class="label">
                                                <label class="switch">
                                                    <input type="checkbox" />
                                                    <span class="slider round" onClick={() => (atualizar(1))}></span>
                                                </label>
                                            </div></td>
                                            <td class="td-lista"><a href="/">Acessar</a></td>
                                        </tr>
                                    </thead>
                                </li>

                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PainelSalas;