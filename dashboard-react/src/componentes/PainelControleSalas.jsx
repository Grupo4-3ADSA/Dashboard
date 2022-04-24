import React, { useState, useEffect } from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import '../html-css-template/css/style-list.css';

function PainelSalas(props) {
    return (
        <>
            <div className="container-conteudo">
                <h2 className="h2-titulo">Sala: A | Andar: 1º</h2>
                <div className="list organiza-lista">
                    <ul>
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
                                                <span class="slider round"></span>
                                            </label>
                                        </div></td>
                                        <td class="td-lista"><a href="/">Acessar</a></td>
                                    </tr>
                                </thead>
                            </li>

                        </table>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default PainelSalas;