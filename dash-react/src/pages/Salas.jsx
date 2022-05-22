import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../html-css-template/css/style-global.css';
import '../html-css-template/css/style-list.css';
import '../html-css-template/css/style-modais.css';
import api from '../Api';
import ListaSalas from '../componentes/listas/ListaSalas';
import NavSupEsquerdo from '../componentes/navbar/NavSupEsquerdo';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import Selects from '../componentes/salas/Selects';
import ImgDesfazer from '../html-css-template/imagens/desfazer.png';
import ModalCadastro from '../componentes/modais/ModalCadastro';
import ModalEditar from '../componentes/modais/ModalEditar';

function Sala() {
    
    const [idRoom, setIdRoom] = useState([]);
    const [name, setName] = useState([]);
    const [floor, setFloor] = useState([]);

    function setVariavel(pName, pIdRoom, pFloor) {
        setName(pName)
        setIdRoom(pIdRoom)
        setFloor(pFloor)
        console.log(pName)
        setShowModalEditar(true)
    }

    /* Abre modal cadastrar*/
    const [showModalCadastrar, setShowModalCadastrar] = useState(false)
    const showOrHideCadastro = () => setShowModalCadastrar(true)

    /* Abre modal editar*/
    const [showModalEditar, setShowModalEditar] = useState(false)

    const navigate = useNavigate();

    const [rooms, setRooms] = useState([]);
    console.log(rooms)

    useEffect(() => {
        api.Api.get("/rooms")
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <>
            {showModalCadastrar ?
                <ModalCadastro
                    closeModalCadastrar={() =>
                        setShowModalCadastrar(false)}
                /> : <></>
            }


            {showModalEditar ?
                <ModalEditar
                    idRoom={idRoom}
                    name={name}
                    floor={floor}
                    closeModalEditar={() =>
                        setShowModalEditar(false)}
                /> : <></>
            }

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

                    <h2>Salas cadastradas</h2>
                    <Selects />

                    <button className="btn-box-select" onClick={showOrHideCadastro} >Cadastrar Sala</button>

                    <div className="list organiza-lista">
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
                            {
                                rooms.map(rooms => (
                                    <ListaSalas
                                        setId={setVariavel}
                                        name={rooms.name}
                                        floor={rooms.floor}
                                        idRoom={rooms.idRoom}
                                    />
                                ))
                            }
                        </table>
                    </div>

                </div>

            </div>


        </>
    )

}

export default Sala;