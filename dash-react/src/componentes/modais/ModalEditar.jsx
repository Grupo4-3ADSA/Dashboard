import React, { useState } from "react";
import '../../html-css-template/css/style-modais.css';
import '../../html-css-template/css/style-global.css';
/* import Resposta from '../../componentes/respostas-post/resposta' */

import Api from "../../Api";

function Modal(props) {
    const [showElement, setShowElement] = useState(false)
    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])

    var idSalaSelecionada = props.idRoom

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

    return (
        <>
            {/* {showElement ? <Resposta /> : <></>} */}

            <div className="modal-centro">
                <div id="cadastro" className="modal">
                    <button onClick={props.closeModalEditar} className="btn-close" >X</button>
                    <h2>Editar salas</h2>
                    <form onSubmit={atualizar}>
                        <h4>Nome:</h4>
                        <input className="input-fild" type="text" placeholder="Digite o nome da sala"
                            value={nomeSala} onChange={e => setNomeSala(e.target.value)} />
                        <h4>Andar:</h4>
                        <input type="text" placeholder="Digite o andar dessa sala"
                            value={andarSala} onChange={e => setAndarSala(e.target.value)} />
                        <button className="btn-modal-escuro lado " type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal;