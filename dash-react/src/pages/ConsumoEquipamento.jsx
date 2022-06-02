import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../html-css-template/css/style-global.css';
import '../html-css-template/css/style-list.css';
import api from '../Api'
import ListaSalas from '../componentes/listas/ListaSalas';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import ImgVoltar from '../html-css-template/imagens/voltar.png';
import LogoOnclnBranco from '../html-css-template/imagens/img-logo/logo-branco.png';
import SelectsGerais from '../componentes/selects/SelectsGerais';

/* import ListaEquipamentos from "../componentes/listas/ListaEquipamentos"; */

function Consumo(props) {
    const navigate = useNavigate();
    const [equips, setEquips] = useState([]);

    useEffect(() => {
        api.Api.get("/equipments")
            .then(response => {
                console.log(response.data)
                setEquips(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

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
                        
                        <h2>Equipamentos com mias consumo</h2>
                        <SelectsGerais />

                        <div className="list organiza-lista">
                            <table className="table-lista">
                                <li className="title-lista">
                                    <thead>
                                        <tr>
                                            <th className="tg-baqh">Equipamento</th>
                                            <th className="tg-baqh">Sala</th>
                                            <th className="tg-baqh">Andar</th>
                                            <th className="tg-baqh">Estado</th>
                                            <th className="tg-baqh "></th>
                                        </tr>
                                    </thead>
                                </li>

                                <li>
                                    <thead >
                                        <tr>
                                            <td class="td-lista">Ar condicionado</td>
                                            <td class="td-lista">A</td>
                                            <td class="td-lista">1°</td>
                                            <td class="td-lista">Ligado</td>
                                            <td class="td-lista"><a href="/">Acessar</a> </td>
                                        </tr>
                                    </thead>
                                </li>



                                {/*{

                                equips.map(equips => (
                                    <ListaEquipamentos
                                        name={equips.name}
                                        floor={equips.floor}
                                        idRoom={equips.idRoom}

                                    />
                                ))

                            }
                        */}
                            </table>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Consumo;