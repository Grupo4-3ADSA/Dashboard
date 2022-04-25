import React, { useEffect, useState } from "react";
import '../../html-css-template/css/style.css';
import '../../html-css-template/css/style-componentes.css';
import '../../html-css-template/css/style-modais.css';

import atencao from '../../html-css-template/imagens/atencao.png';
import Modal from "react-modal/lib/components/Modal";
import Api from '../../Api'

function ListaSalas(props) {

    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])

    function deletar(idSalaSelecionada) {

        if (typeof idSalaSelecionada !== "undefined") {
            Api.Api.delete(`/rooms/${idSalaSelecionada}/`)
                .then(() => {
                    console.log("excluido com sucesso")
                    setDeletarIsOpen(false)
                    document.location.reload(true);
                })
                
    
        }

    }

    function atualizar(idSalaSelecionada) {
        if (typeof idSalaSelecionada !== "undefined") {

            Api.Api.put(`/rooms/${idSalaSelecionada}/`, {
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
        overlay: {
            backgroundColor: 'rgba(24, 24, 24, 0.822)'
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
            alingItens: 'center', 
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)',
        }
    }

    return (
        <>
            <li>
                <thead >
                    <tr>
                        <td class="td-lista">{props.name}</td>
                        <td class="td-lista">{props.floor}</td>
                        <td class="td-lista"><img src={atencao} alt="" /></td>
                        <td class="td-lista-editar-deletar">&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="editar" onClick={() => handleOpenModalAtualizar(`${props.idRoom}`)}>Editar/</button>
                            <button className="deletar" onClick={() => handleOpenModalDeletar(`${props.idRoom}`)}>Deletar</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td class="td-lista"><a href="/">Acessar</a> </td>
                    </tr>
                </thead>
            </li>

            <Modal
                isOpen={modalDeletarIsOpen}
                onRequstClose={handleCloseModal}
                style={customStyles}>

                <button className="btn-close" onClick={handleCloseModal}>X</button>

                <h1>Tem certeza que deseja deletar a sala?</h1>

                <div >
                    <button onClick={() => deletar(idSalaSelecionada)} className="btn-modal-escuro">Deletar</button>
                    <button className="btn-modal" onClick={handleCloseModal}>Cancelar</button>
                </div>


            </Modal>

            <Modal
                isOpen={modalAtualizarIsOpen}
                onRequstClose={handleCloseModal}
                style={customStyles}
            >
                <button onClick={handleCloseModal} className="btn-close">X</button>

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
                            <button className="btn-modal-escuro" type="submit" onClick={() => atualizar(idSalaSelecionada)}>Atualizar</button>

                            <button onClick={handleCloseModal} className="btn-modal">Cancelar</button>
                        </div>

                    </form>

                </div>

            </Modal>


        </>
    )

}

export default ListaSalas