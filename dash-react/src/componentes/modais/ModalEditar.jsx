import React, { useState, useEffect } from "react";
import '../../html-css-template/css/style-modais.css';
import '../../html-css-template/css/style-global.css';
import RespostaCerto from '../respostas-post/RespostaCerto';
import RespostaErro from '../respostas-post/RespostaErro';
/* import Resposta from '../../componentes/respostas-post/resposta' */

import api from "../../Api";

function Modal(props) {
    const [nomeSala, setNomeSala] = useState(props.name)
    const [andarSala, setAndarSala] = useState(props.floor)
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    function atualizar(event) {
        event.defaultValue()
        if (typeof props.idRoom !== "undefined") {

            api.Api.put(`/rooms/${props.idRoom}/`, {
                name: nomeSala,
                floor: andarSala
            }).then(response => {
                console.log(response.status)
                setRespostaCerto(true)
                setRespostaErrado(false)
                setTimeout(setRespostaCerto, 1000)
                window.location.reload()
                
            }).catch(erro => {
                setRespostaErrado(true)
                setRespostaCerto(false)
                console.log("Deu ruim!");
            })
        }
    }

    return (
        <>
            {respostaCerto ? <RespostaCerto closeRespostaCerto={
                () => setRespostaCerto(false)} /> : <></>}

            {respostaErrado ? <RespostaErro closeRespostaErro={
                () => setRespostaErrado(false)} /> : <></>}

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
                        <input type="text"
                            placeholder="Digite o andar dessa sala"
                            defaultValue={(`${props.floor}`)}
                            onChange={e => setAndarSala(e.target.value)} />

                        <button onClick={props.closeModalEditar} className="btn-modal">Cancelar</button>
                        <button className="btn-modal-escuro" type="submit"
                            onClick={() => atualizar}>Atualizar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal;