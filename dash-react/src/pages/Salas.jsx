import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../html-css-template/css/style-global.css';
import '../html-css-template/css/style-list.css';
import '../html-css-template/css/style-modais.css';
import Api from '../Api';
import ListaSalas from '../componentes/listas/ListaSalas';
import NavSupEsquerdo from '../componentes/navbar/NavSupEsquerdo';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import Selects from '../componentes/salas/Selects';
import ImgDesfazer from '../html-css-template/imagens/desfazer.png';
import Modal from '../componentes/modais/ModalCadastro'

function Sala() {
    /* Abre modal */
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)

    const navigate = useNavigate();

    const [rooms, setRooms] = useState([]);
    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])

    useEffect(() => {
        Api.Api.get("/rooms")
            .then(response => {
                console.log(response.data)
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <>
            {showElement ?
                <Modal closeModal={() => setShowElement(false)} />
                : <></>}
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
                    <div id="resposta" class="div-deu-certo" >
                        <h3>Cadastrado com sucesso!!!</h3>
                    </div>
                    <h2>Salas cadastradas</h2>
                    <Selects />

                    <button className="btn-box-select" onClick={showOrHide} >Cadastrar Sala</button>

                    <div className="list organiza-lista">
                        <ul>
                            <table className="table-lista">
                                <li className="title-lista">
                                    <thead>
                                        <tr>
                                            <th >Sala</th>
                                            <th >Andar</th>
                                            <th >Status</th>
                                            <th >Ação</th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                </li>

                                {rooms.map(rooms => (
                                    <ListaSalas
                                        name={rooms.name}
                                        floor={rooms.floor}
                                        idRoom={rooms.idRoom} />
                                ))
                                }

                            </table>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Sala;