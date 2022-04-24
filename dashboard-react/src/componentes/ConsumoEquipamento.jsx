import React, {useState, useEffect} from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import api from '../Api'
import ListaEquipamentos from "./ListaEquipamentos";


function Consumo(props) {

    
    const [equips, setEquips] = useState([]);

    useEffect(() => {
        api.get("/equipments")
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
            <div className="container-conteudo">

                <h2 className="h2-titulo">Equipamentos com mias consumo</h2>


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
                    <ul className="lista">
                        <table className="table-consumo">
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

                            {
                                
                                equips.map(equips => (
                                    <ListaEquipamentos
                                    name={equips.name}
                                    floor={equips.floor}
                                    idRoom={equips.idRoom}

                                    />
                                ))
                                
                            }
                            
                        </table>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Consumo;