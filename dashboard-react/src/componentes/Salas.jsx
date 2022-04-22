import React, { useState } from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';

import atencao from '../html-css-template/imagens/atencao.png';
import bolaVerde from '../html-css-template/imagens/bolaVerde.png';
import edit from '../html-css-template/imagens/edit.png';
import trash from '../html-css-template/imagens/trash.png';
import Modal from "react-modal/lib/components/Modal";
import setaSelect from "../html-css-template/imagens/seta-select.png";

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
                        <table className="list-salas">
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
                            <li>
                                <thead>
                                    <tr>
                                        <td class="tg-baqh">A</td>
                                        <td class="tg-baqh">1°</td>
                                        <td class="tg-baqh"><img src={atencao} alt="" /></td>
                                        <td class="tg-baqh-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="editar">Editar/</button>
                                            <button className="deletar">Deletar</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td class="tg-baqh"><a href="/">Acessar</a> </td>
                                    </tr>
                                </thead>
                            </li>
                            <li>
                                <thead>
                                    <tr>
                                        <td class="tg-baqh">A</td>
                                        <td class="tg-baqh">1°</td>
                                        <td class="tg-baqh"><img src={atencao} alt="" /></td>
                                        <td class="tg-baqh-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="editar">Editar/</button>
                                            <button className="deletar">Deletar</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td class="tg-baqh"><a href="/">Acessar</a> </td>
                                    </tr>
                                </thead>
                            </li><li>
                                <thead>
                                    <tr>
                                        <td class="tg-baqh">A</td>
                                        <td class="tg-baqh">1°</td>
                                        <td class="tg-baqh"><img src={atencao} alt="" /></td>
                                        <td class="tg-baqh-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="editar">Editar/</button>
                                            <button className="deletar">Deletar</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td class="tg-baqh"><a href="/">Acessar</a> </td>
                                    </tr>
                                </thead>
                            </li><li>
                                <thead>
                                    <tr>
                                        <td class="tg-baqh">A</td>
                                        <td class="tg-baqh">1°</td>
                                        <td class="tg-baqh"><img src={atencao} alt="" /></td>
                                        <td class="tg-baqh-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="editar">Editar/</button>
                                            <button className="deletar">Deletar</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td class="tg-baqh"><a href="/">Acessar</a> </td>
                                    </tr>
                                </thead>
                            </li><li>
                                <thead>
                                    <tr>
                                        <td class="tg-baqh">A</td>
                                        <td class="tg-baqh">1°</td>
                                        <td class="tg-baqh"><img src={atencao} alt="" /></td>
                                        <td class="tg-baqh-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="editar">Editar/</button>
                                            <button className="deletar">Deletar</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td class="tg-baqh"><a href="/">Acessar</a> </td>
                                    </tr>
                                </thead>
                            </li><li>
                                <thead>
                                    <tr>
                                        <td class="tg-baqh">A</td>
                                        <td class="tg-baqh">1°</td>
                                        <td class="tg-baqh"><img src={atencao} alt="" /></td>
                                        <td class="tg-baqh-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="editar">Editar/</button>
                                            <button className="deletar">Deletar</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td class="tg-baqh"><a href="/">Acessar</a> </td>
                                    </tr>
                                </thead>
                            </li><li>
                                <thead>
                                    <tr>
                                        <td class="tg-baqh">A</td>
                                        <td class="tg-baqh">1°</td>
                                        <td class="tg-baqh"><img src={atencao} alt="" /></td>
                                        <td class="tg-baqh-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="editar">Editar/</button>
                                            <button className="deletar">Deletar</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td class="tg-baqh"><a href="/">Acessar</a> </td>
                                    </tr>
                                </thead>
                            </li>

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

                <div classNameName="containerl_modal edit">

                    <form action="">

                        <label htmlFor="">
                            <p>Sala:</p>
                            <input type="text" name="nomeSala" />
                        </label> <br />

                        <label htmlFor="">
                            <p>Andar:</p>
                            <input type="text" name="nomeSala" />
                        </label>

                        <div classNameName="botoes">
                            <button classNameName="atualizar" onClick={handleOpenModalAtualizar}>Atualizar</button>

                            <button classNameName="deletar">Deletar</button>
                        </div>

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