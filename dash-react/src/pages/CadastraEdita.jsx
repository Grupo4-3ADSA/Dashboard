import React, { useState } from "react";
import '../html-css-template/css/style-global.css';
import { useNavigate } from 'react-router-dom';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import ImgDesfazer from '../html-css-template/imagens/desfazer.png';
import LogoOnclnBranco from '../html-css-template/imagens/logo-branco.png';

function EditarCadastrar() {
    const navigate = useNavigate();

    return (
        <>
            <div clas="container">

                <div class="superior">
                    <div class="nav-superior-esquerda">
                        <img src={LogoOnclnBranco} alt="Logo" />
                    </div>

                    <NavSupCentro />
                </div>

                <div class="container-dash">
                    <div class="nav-esquerda">
                        <NavEsquerdo />
                    </div>
                    <div class="conteudo">
                        <img className="voltar" onClick={() => navigate(-1)} src={ImgDesfazer} alt="" />

                        <div className="box-btn-cadastro">
                            <h2>Cadastrar, editar ou excluir</h2>
                            <button onClick={() => navigate("/salas")}>Salas</button>
                            <button onClick={() => navigate("/salas")}>Ar-Condicionado</button>
                            <button onClick={() => navigate("/salas")}>Lampadas</button>
                            <button onClick={() => navigate("/salas")}>Tomadas</button>
                            <button onClick={() => navigate("/salas")}>Dispositivo-Cln</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default EditarCadastrar;