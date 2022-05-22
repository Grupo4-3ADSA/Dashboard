import React, { useState, useEffect } from "react";
import '../../html-css-template/css/style-modais.css';
import '../../html-css-template/css/style-global.css';
/* import Resposta from '../../componentes/respostas-post/resposta' */

import api from "../../Api";

function Modal(props) {
    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])

    var idSalaSelecionada = props.idRoom

    function atualizar(idSalaSelecionada) {
        if (typeof idSalaSelecionada !== "undefined") {
            api.Api.put(`/rooms/${idSalaSelecionada}/`, {
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
                        <h4>Sala:</h4>

                        <input className="input-fild"
                            defaultValue={(`${props.name}`)}
                            autoFocus type="text"
                            placeholder="Digite o nome da sala"
                            onChange={e => setNomeSala(e.target.value)}
                        />

                        <h4>Andar:</h4>
                        <input type="text" placeholder="Digite o andar dessa sala"
                            defaultValue={(`${props.floor}`)} onChange={e => setAndarSala(e.target.value)} />
                        <button onClick={props.closeModalEditar} className="btn-modal">Cancelar</button>
                        <button className="btn-modal-escuro" type="submit"
                            onClick={() => atualizar(idSalaSelecionada)}>Atualizar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal;