import React, { useState, useEffect } from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import api from '../Api'

import Modal from "react-modal/lib/components/Modal";
import ListaSalas from "../componentes/ListaSalas"

Modal.setAppElement('#root')

function Sala() {

    const [rooms, setRooms] = useState([]);
    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])

    useEffect(() => {
        api.get("/rooms")
            .then(response => {
                console.log(response.data)
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    function cadastrar(){
        console.log(nomeSala + " " + andarSala)
        api.post("/rooms", {
            name: nomeSala,
            floor: andarSala
        })
    }

    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalEditIsOpen, setEditIsOpen] = useState(false)
    const [modalAtualizarIsOpen, setAtualizarIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)

    }


    function handleOpenModalAtualizar() {
        setAtualizarIsOpen(true)
        setEditIsOpen(false)

    }

    function handleCloseModal() {
        setIsOpen(false)
        setEditIsOpen(false)
        setAtualizarIsOpen(false)
    }

    const customStyles = {
        content: {
            width: '30%',
            height: '35%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    return (

        <>
            <div className="container-conteudo">

                <h2 className="h2-titulo">Salas cadastradas</h2>

                <div classNameName="box-select">

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

                    <button className="btn-box-select" onClick={handleOpenModal}>Cadastrar Sala</button>

                </div>

                <div className="list organiza-lista">
                    <ul className="list-salas">
                        <table className="table-salas">
                            <li className="title-list-salas">
                                <thead>
                                    <tr>
                                        <th className="tg-baqh">Sala</th>
                                        <th className="tg-baqh">Andar</th>
                                        <th className="tg-baqh">Status</th>
                                        <th className="tg-baqh-a">Ação</th>
                                        <th className="tg-baqh"></th>
                                    </tr>
                                </thead>
                            </li>
                            
                            {
                                
                                rooms.map(rooms => (
                                    <ListaSalas
                                    name={rooms.name}
                                    floor={rooms.floor}
                                    idRoom={rooms.idRoom}

                                    />
                                ))
                                
                            }

                        </table>
                    </ul>

                </div>

            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequstClose={handleCloseModal}
                style={customStyles}
            >
                <button onClick={handleCloseModal}>close</button>

                <h2>Cadastrar Salas</h2>

                <div classNameName="containerl_modal">

                    <form onSubmit={cadastrar}>

                        <label htmlFor="">
                            <p>Nome:</p>
                            <input type="text" value={nomeSala} onChange={e => setNomeSala(e.target.value)}/>
                        </label> <br />

                        <label htmlFor="">
                            <p>Andar:</p>
                            <input type="text" value={andarSala} onChange={e => setAndarSala(e.target.value)}/>
                        </label>


                        <button type="submit">Cadastrar</button>

                    </form>

                </div>



            </Modal>

            <Modal
                isOpen={modalAtualizarIsOpen}
                onRequstClose={handleCloseModal}
                style={customStyles}>

                <button onClick={handleCloseModal}>close</button>

                <div classNameName="confirmacao">

                    <h1>Tem certeza que deseja atualizar as informações dessa sala?</h1>

                    <div classNameName="confimacao_button">
                        <button classNameName="atualizar">Atualizar</button>

                        <button classNameName="cancelar" onClick={handleCloseModal}>Cancelar</button>
                    </div>
                </div>


            </Modal>

        </>

    )

}

export default Sala;