import React, { useState } from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';

import atencao from '../html-css-template/imagens/atencao.png';
import bolaVerde from '../html-css-template/imagens/bolaVerde.png';
import edit from '../html-css-template/imagens/edit.png';
import trash from '../html-css-template/imagens/trash.png';
import Modal from "react-modal/lib/components/Modal";

Modal.setAppElement('#root')

function Sala() {

    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalEditIsOpen, setEditIsOpen] = useState(false)
    const [modalAtualizarIsOpen, setAtualizarIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)

    }

    function handleOpenModalEdit() {
        setEditIsOpen(true)

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
            <head>

            </head>
            <title>Salas</title>
            <div class="conteudo-lista">

                <h2>Salas</h2>

                <div className="op">

                    <select name="select">
                        <option value="valor1" selected >Predio 1 - Haddock Lobo 595</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>

                    <button className="cadastrar" onClick={handleOpenModal}>Cadastrar Sala</button>

                </div>

                <div className="titulos">
                    <p>Sala</p>
                    <p>Andar</p>
                    <p>Status</p>
                    <p>Ação</p>
                    <button className="filtrar">Filtrar por: Status</button>
                </div>

                <ul >
                    <li>
                        info
                    </li>
                    <li>
                        info
                    </li><li>
                        info
                    </li><li>
                        info
                    </li><li>
                        info
                    </li><li>
                        info
                    </li>
                </ul>





                {/*  
                 <div class="lista">
                <div className="sala">
                        <p id="sala">A</p>
                    </div>

                    <div className="andar">
                        <p id="andar">1</p>
                    </div>

                    <div className="status">
                        <img src={atencao} alt="" />
                    </div>

                    <div className="acao">
                        <a href="" type="button" ><img src={edit} alt="" /> Editar</a>
                        <button onClick={handleOpenModalEdit}>Editar</button>
                        |
                        <a href=""> <img src={trash} alt="" /> Deletar</a>
                    </div>

                    <div className="acessar">
                        <a href="">Acessar</a>
                    </div>
                     </div>
 */}


            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequstClose={handleCloseModal}
                style={customStyles}
            >
                <button onClick={handleCloseModal}>close</button>

                <h2>Cadastrar Salas</h2>

                <div className="containerl_modal">

                    <form action="">

                        <label htmlFor="">
                            <p>Nome:</p>
                            <input type="text" name="nomeSala" />
                        </label> <br />

                        <label htmlFor="">
                            <p>Andar:</p>
                            <input type="text" name="nomeSala" />
                        </label>

                        <button>Cadastrar</button>

                    </form>

                </div>



            </Modal>

            <Modal
                isOpen={modalEditIsOpen}
                onRequstClose={handleCloseModal}
                style={customStyles}
            >
                <button onClick={handleCloseModal}>close</button>

                <h2>Editar-Sala A | Andar: 1</h2>

                <div className="containerl_modal edit">

                    <form action="">

                        <label htmlFor="">
                            <p>Sala:</p>
                            <input type="text" name="nomeSala" />
                        </label> <br />

                        <label htmlFor="">
                            <p>Andar:</p>
                            <input type="text" name="nomeSala" />
                        </label>

                        <div className="botoes">
                            <button className="atualizar" onClick={handleOpenModalAtualizar}>Atualizar</button>

                            <button className="deletar">Deletar</button>
                        </div>

                    </form>

                </div>



            </Modal>

            <Modal
                isOpen={modalAtualizarIsOpen}
                onRequstClose={handleCloseModal}
                style={customStyles}>

                <button onClick={handleCloseModal}>close</button>

                <div className="confirmacao">

                    <h1>Tem certeza que deseja atualizar as informações dessa sala?</h1>

                    <div className="confimacao_button">
                        <button className="atualizar">Atualizar</button>

                        <button className="cancelar" onClick={handleCloseModal}>Cancelar</button>
                    </div>
                </div>


            </Modal>

        </>

    )

}

export default Sala;