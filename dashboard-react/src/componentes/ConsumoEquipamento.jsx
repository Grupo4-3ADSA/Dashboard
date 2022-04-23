import React from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';


function Consumo(props) {
    return (
        <>
            <div className="container-conteudo">

                <h2 className="h2-titulo">Equipamentos com mias consumo</h2>


                    <select name="select-predio" className="select-maior">
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
                    <ul className="lista">
                        <table className="table-consumo">
                            <li className="title-lista">
                                <thead>
                                    <tr>
                                        <th className="tg-lista">ID</th>
                                        <th className="tg-lista-equipamento">Equipamento</th>
                                        <th className="tg-lista">Sala</th>
                                        <th className="tg-lista">Andar</th>
                                        <th className="tg-lista">Estado</th>
                                        <th className="tg-lista"></th>
                                    </tr>
                                </thead>
                            </li>

                            <li>
                                <thead >
                                    <tr>
                                        <td class="tg-lista-consumo">012548</td>
                                        <td class="tg-lista-equi">Ar-Condicionado</td>
                                        <td class="tg-lista">A</td>
                                        <td class="tg-lista">1°</td>
                                        <td class="tg-lista">Ligado</td>
                                        <td class="tg-lista"><a href="/">Acessar</a> </td>
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

export default Consumo;