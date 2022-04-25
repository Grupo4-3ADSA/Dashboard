import React, { useState } from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import DashGenerica from '../pages/DashGenerico';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


function EditarCadastrar() {
    const navigate = useNavigate();

    return (
        <>
        
            <div className="container-conteudo">
                <div className="box-btn-cadastro">
                    <h2 className="h2-titulo">Cadastrar ou editar</h2>
                    <button onClick={()=> (<DashGenerica abra={"/salas"}/>)}>Salas</button>
                    <button>Ar-Condicionado</button>
                    <button>Lampadas</button>
                    <button>Tomadas</button>
                    <button>Dispositivo-Cln</button>
                </div>

            </div>

        </>

    )

}

export default EditarCadastrar;