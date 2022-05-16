import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../../html-css-template/css/style-modais.css';
import '../../html-css-template/css/style-global.css';

function Modal() {
    function FechaModal() {
        document.getElementById('cadastro').style.display = "none"
    }

    return (
        <>
            <div className="container">
                <div id="cadastro" className="modal-cadastro formulario">
                <button className="btn-close"   onClick={() => FechaModal()}>X</button>
                    <h2>Cadastrar salas</h2>
                    <form action="" >
                        
                        <h4>Nome:</h4>
                        <input className="input-fild" type="text" placeholder="Digite o nome da sala" />
                        <h4>Andar:</h4>
                        <input type="text" placeholder="Digite o andar dessa sala" />

                        <button className="btn-box-select">Cadastrar Sala</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal;