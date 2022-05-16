import React, { useState } from "react";
import '../html-css-template/css/style-global.css';
import {useNavigate} from 'react-router-dom';
import NavSupEsquerdo from '../componentes/navbar/NavSupEsquerdo';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import ImgDesfazer from '../html-css-template/imagens/desfazer.png';

function EditarCadastrar() {
    const navigate = useNavigate();

    return (
        <>
            <div clas="container">
                <div class="superior">
                    <NavSupEsquerdo />
                    <NavSupCentro />
                </div>
                <div class="nav-esquerda">
                    <NavEsquerdo />
                </div>
                <div class="conteudo">
                <img onClick={() => navigate(-1)} src={ImgDesfazer} alt="" />
                    <div className="box-btn-cadastro">
                        <h2>Cadastrar, editar ou excluir</h2>
                        <button onClick={()=> navigate("/salas")}>Salas</button>
                        <button onClick={()=> navigate("/salas")}>Ar-Condicionado</button>
                        <button onClick={()=> navigate("/salas")}>Lampadas</button>
                        <button onClick={()=> navigate("/salas")}>Tomadas</button>
                        <button onClick={()=> navigate("/salas")}>Dispositivo-Cln</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default EditarCadastrar;