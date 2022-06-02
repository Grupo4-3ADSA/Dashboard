import React, { useState, useEffect } from "react";
import '../../../html-css-template/css/style-modais.css';
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErro from '../../respostas-crud/RespostaErro';
import SelectSala from '../../selects/SelectSala';

import api from "../../../Api";

function ModalCadastroOnCln(props) {
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    const [nomeSala, setNomeSala] = useState([])
    const [qrCode, setQrCode] = useState([])

    const [rooms, setRooms] = useState([]);

    function cadastrar(event) {
        event.preventDefault()
        console.log(qrCode)
        api.Api.post("/clnboxex", {
            room: {
                idRoom: rooms.id
            },
            qrCode: qrCode
        }).then(response => {
            console.log(response.status)
            setRespostaCerto(true)
            setRespostaErrado(false)
            setTimeout(setRespostaCerto, 140000)
            window.location.reload()
        }).catch(erro => {
            console.log(erro)
            setRespostaErrado(true)
            setRespostaCerto(false)
            setTimeout(setRespostaErrado, 7000)
        })
    }

    const idPredio = sessionStorage.idPredio

    useEffect(() => {
        api.Api.get(`/rooms/${idPredio}`)
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <>
            {respostaCerto ? <RespostaCerto
                texto={"Cadastrado com sucesso!"}
                closeRespostaCerto={
                    () => setRespostaCerto(false)} /> : <></>}

            {respostaErrado ? <RespostaErro
                texto={"Erro ao cadastrar"}
                closeRespostaErro={
                    () => setRespostaErrado(false)} /> : <></>}


            <div className="modal-centro">
                <div id="cadastro" className="modal">
                    <button onClick={props.closeModalCadastrar} className="btn-close lado" >X</button>
                    <h2>Cadastrar OnCln-Box</h2>
                    
                    <form onSubmit={cadastrar}>
                        <h4>Sala:</h4>
                        {
                            <SelectSala
                                name={rooms.map(rooms => (
                                    <option value={rooms.id}>{rooms.name}</option>
                                ))} />
                        }

                        <h4 className="h4-topo">Qr-Code:</h4>
                        <input type="text" placeholder="Digite o andar dessa sala"
                            value={qrCode} onChange={e => setQrCode(e.target.value)}
                            maxLength="200" />

                        <button onClick={props.closeModalCadastrar} className="button-cinza button-modal">Cancelar</button>
                        <button className="button-azul lado button-modal" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalCadastroOnCln;