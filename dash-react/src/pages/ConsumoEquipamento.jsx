import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import '../html-css-template/css/style-global.css';
import '../html-css-template/css/style-list.css';
import api from '../Api'
import ListaSalas from '../componentes/listas/ListaSalas';
import NavSupEsquerdo from '../componentes/navbar/NavSupEsquerdo';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import ImgDesfazer from '../html-css-template/imagens/desfazer.png';
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
                    <NavSupEsquerdo />
                    <NavSupCentro />
                </div>
                <div class="nav-esquerda">
                    <NavEsquerdo />
                </div>
                <div class="conteudo">
                <img className="voltar" onClick={() => navigate(-1)} src={ImgDesfazer} alt="" />
                        <h2>Equipamentos com mias consumo</h2>
                        <select name="select-predio" className="select-maior ">
                            <img src="" alt="" />
                            <option value="valor1" selected >Predio 1 - Haddock Lobo 595</option>
                            <option value="valor2">Valor 2</option>
                            <option value="valor3">Valor 3</option>
                        </select>
                        <select name="select-andar" className="select-menor">
                            <option value="valor1" selected >Andar</option>
                            <option value="valor2">Valor 2</option>
                            <option value="valor3">Valor 3</option>
                        </select>
                        <select name="select-sala" className="select-menor">
                            <option value="valor1" selected >Sala</option>
                            <option value="valor2">Valor 2</option>
                            <option value="valor3">Valor 3</option>
                        </select>

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


        </>
    )
}

export default Consumo;