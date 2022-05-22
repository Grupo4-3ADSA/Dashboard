import React, { useState, useEffect } from "react";
import '../../html-css-template/css/style-modais.css';
import '../../html-css-template/css/style-global.css';
import RespostaCerto from '../respostas-post/RespostaCerto';
import RespostaErro from '../respostas-post/RespostaErro';
/* import Resposta from '../../componentes/respostas-post/resposta' */

import api from "../../Api";

function ModalDeletar(props) {
    const [nomeSala, setNomeSala] = useState(props.name)
    const [andarSala, setAndarSala] = useState(props.floor)
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    function deletar(idSalaSelecionada) {

        if (typeof idSalaSelecionada !== "undefined") {
            api.Api.delete(`/rooms/${idSalaSelecionada}/`)
                .then(() => {
                    console.log("excluido com sucesso")
                    document.location.reload(true);
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
                    <h2>Tem certeza que deseja Deletar??</h2>
                    <button onClick={props.closeModalEditar} className="btn-modal">Cancelar</button>
                    <button className="btn-modal-escuro" type="submit"
                        onClick={() => deletar(props.idRoom)}>Deletar</button>

                </div>
            </div>
        </>
    )
}

export default ModalDeletar;