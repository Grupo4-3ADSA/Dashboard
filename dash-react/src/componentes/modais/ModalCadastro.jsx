import React, { useState } from "react";
import '../../html-css-template/css/style-modais.css';
import '../../html-css-template/css/style-global.css';
import RespostaCerto from '../respostas-post/RespostaCerto';
import RespostaErro from '../respostas-post/RespostaErro';

import Api from "../../Api";

function Modal(props) {
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])

    function cadastrar(event) {
        event.preventDefault()
        console.log(nomeSala + " " + andarSala)
        Api.Api.post("/rooms", {
            name: nomeSala,
            floor: andarSala
        })
            .then(response => {
                console.log(response.status)
                setRespostaCerto(true)
                setRespostaErrado(false)
            })
            .catch(erro => {
                console.log(erro)
                setRespostaErrado(true)
                setRespostaCerto(false)

            })
    }

    return (
        <>
            {respostaCerto ? <RespostaCerto closeRespostaCerto={
                () => setRespostaCerto(false)} /> : <></>}

            {respostaErrado ? <RespostaErro closeRespostaErro={
                () => setRespostaErrado(false)} /> : <></>}

            <div className="modal-centro">
                <div id="cadastro" className="modal">
                    <button onClick={props.closeModalCadastrar} className="btn-close" >X</button>
                    <h2>Cadastrar salas</h2>
                    <form onSubmit={cadastrar}>
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