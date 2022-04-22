import React, { useState } from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';

function EditarCadastrar() {
    return (
        <>

            <div className="container-conteudo">
                <div className="box-btn-cadastro">
                    <h2 className="h2-titulo">Cadastrar ou editar</h2>
                    <button>Salas</button>
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