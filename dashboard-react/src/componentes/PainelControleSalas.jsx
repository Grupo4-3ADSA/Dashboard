import React, { useState, useEffect } from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';

function PainelSalas(props) {
    return (
        <>
             <div className="list organiza-lista">
                    <ul className="lista">
                        <table className="table-salas">
                        <li>
                                <thead >
                                    <tr>
                                        <td class="tg-lista">A</td>
                                        <td class="tg-lista">1°</td>
                                        <td class="tg-lista"><img src={atencao} alt="" /></td>
                                        <td class="tg-lista-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="editar">Editar/</button>
                                            <button className="deletar">Deletar</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td class="tg-lista"><a href="/">Acessar</a> </td>
                                    </tr>
                                </thead>
                            </li>
                            <li>
                                <thead >
                                    <tr>
                                        <td class="tg-lista">A</td>
                                        <td class="tg-lista">1°</td>
                                        <td class="tg-lista"><img src={atencao} alt="" /></td>
                                        <td class="tg-lista-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="editar">Editar/</button>
                                            <button className="deletar">Deletar</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td class="tg-lista"><a href="/">Acessar</a> </td>
                                    </tr>
                                </thead>
                            </li>
                           
                        </table>
                    </ul>

                </div>
        </>
    )
}

export default PainelSalas;