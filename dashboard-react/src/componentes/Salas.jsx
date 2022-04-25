import React, { useState, useEffect } from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import '../html-css-template/css/style-list.css';
import '../html-css-template/css/style-modais.css';
import Api from '../Api'

import Modal from "react-modal/lib/components/Modal";
import ListaSalas from "../componentes/listas/ListaSalas"

Modal.setAppElement('#root')

function Sala() {

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

    function cadastrar() {
        console.log(nomeSala + " " + andarSala)
        Api.Api.post("/rooms", {
            name: nomeSala,
            floor: andarSala
        })
        .then(response => {
            console.log(response.status)
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
        overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
            width: '30%',
            height: '45%',
            top: '50%',
            left: '60%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
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
                isOpen={modalIsOpen} onRequestClose={handleCloseModal} style={customStyles} >

                <button onClick={handleCloseModal} className='btn-close'>X</button>

                <h2>Cadastrar Salas</h2>

                <div>

                    <form onSubmit={cadastrar}>

                        <label htmlFor="">
                            <p>Nome:</p>
                            <input type="text" value={nomeSala} onChange={e => setNomeSala(e.target.value)} />
                        </label> <br />

                        <label htmlFor="">
                            <p>Andar:</p>
                            <input type="text" value={andarSala} onChange={e => setAndarSala(e.target.value)} />
                        </label><br /><br />
                        <button type="submit" className="btn-modal-escuro lado">Cadastrar</button>

                    </form>

                </div>



            </Modal>

            <Modal
                isOpen={modalAtualizarIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}>

                <button onClick={handleCloseModal} className='btn-close'>close</button>

                <div classNameName="confirmacao">

                    <h1>Tem certeza que deseja atualizar as informações dessa sala?</h1>

                    <div classNameName="confimacao_button">
                        <button classNameName="atualizar">Atualizar</button>

                        <button classNameName="btn-modal-escuro" onClick={handleCloseModal}>Cancelar</button>
                    </div>
                </div>


            </Modal>

        </>

    )

}

export default Sala;