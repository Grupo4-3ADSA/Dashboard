import React, { useEffect, useState } from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css'
import atencao from '../html-css-template/imagens/atencao.png';
import Modal from "react-modal/lib/components/Modal";
import api from '../Api'

function ListaSalas(props) {

    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])

    function deletar(idSalaSelecionada) {

        if (typeof idSalaSelecionada !== "undefined") {

            api.delete(`/rooms/${idSalaSelecionada}/`)
                .then(() => {
                    console.log("excluido com sucesso")
                })
                
        }

    }

    function atualizar(idSalaSelecionada) {
        if (typeof idSalaSelecionada !== "undefined") {

            api.put(`/rooms/${idSalaSelecionada}/`, {
                name: nomeSala,
                floor: andarSala
            })
                .then(() => {
                    console.log("Atualizado com sucesso")
                })

        }

    }

    const [modalDeletarIsOpen, setDeletarIsOpen] = useState(false)
    const [modalAtualizarIsOpen, setAtualizarIsOpen] = useState(false)

    var idSalaSelecionada = props.idRoom

    function handleOpenModalAtualizar(idSala) {
        idSalaSelecionada = idSala
        setAtualizarIsOpen(true)

    }

    function handleOpenModalDeletar(idSala) {
        idSalaSelecionada = idSala
        setDeletarIsOpen(true)

    }

    function handleCloseModal() {
        setAtualizarIsOpen(false)
        setDeletarIsOpen(false)
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
            <li>
                <thead >
                    <tr>
                        <td class="tg-lista">{props.name}</td>
                        <td class="tg-lista">{props.floor}</td>
                        <td class="tg-lista"><img src={atencao} alt="" /></td>
                        <td class="tg-lista-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="editar" onClick={() => handleOpenModalAtualizar(`${props.idRoom}`)}>Editar/</button>
                            <button className="deletar" onClick={() => handleOpenModalDeletar(`${props.idRoom}`)}>Deletar</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td class="tg-lista"><a href="/">Acessar</a> </td>
                    </tr>
                </thead>
            </li>
            
            <Modal
                isOpen={modalDeletarIsOpen}
                onRequstClose={handleCloseModal}
                style={customStyles}>

                <button onClick={handleCloseModal}>close</button>

                <div classNameName="confirmacao">

                    <h1>Tem certeza que deseja deletar a sala?</h1>

                    <div classNameName="confimacao_button">
                        <button classNameName="atualizar" onClick={() => deletar(idSalaSelecionada)}>Deletar</button>

                        <button classNameName="cancelar" onClick={handleCloseModal}>Cancelar</button>
                    </div>
                </div>


            </Modal>

            <Modal
                isOpen={modalAtualizarIsOpen}
                onRequstClose={handleCloseModal}
                style={customStyles}
            >
                <button onClick={handleCloseModal}>close</button>

                <h2>Editar-Sala A | Andar: 1</h2>

                <div classNameName="containerl_modal edit">

                    <form onSubmit={atualizar}>

                        <label htmlFor="">
                            <p>Sala:</p>
                            <input type="text" name="nomeSala" value={nomeSala} onChange={e => setNomeSala(e.target.value)} />
                        </label> <br />

                        <label htmlFor="">
                            <p>Andar:</p>
                            <input type="text" name="andarSala" value={andarSala} onChange={e => setAndarSala(e.target.value)} />
                        </label>

                        <div classNameName="botoes">
                            <button classNameName="atualizar" type="submit" onClick={() => atualizar(idSalaSelecionada)}>Atualizar</button>

                            <button classNameName="deletar">cancelar</button>
                        </div>

                    </form>

                </div>

            </Modal>


        </>
    )

}

export default ListaSalas