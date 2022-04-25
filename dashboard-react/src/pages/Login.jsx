import React from "react";
import '../html-css-template/css/style.css';
import logoOncln from '../html-css-template/imagens/logo-cln.png'
import fundoLogin from '../html-css-template/imagens/fundo-login.png'
import {useNavigate} from 'react-router-dom'
import autentica from '../Api'

function Login(props) {
    const navigate = useNavigate();

    function autenticacao(login, senha) {
        if (typeof IdEquipamento !== "undefined") {

            autentica.ApiLogin.Post(`autenticacao`, {
            })
                .then(() => {
                    console.log("Atualizado com sucesso")
                })
                navigate("/dash-generico")
        }

    }

    return (
        <>
            <nav>
                <div class="container">
                    <img src={logoOncln} alt="Logo" class="logo" />
                </div>
            </nav>

            <div class="container login">
                <div class="login-content">
                    <img src={fundoLogin} alt="" class="login-img" />
                    <div class="formulario">
                        <h2>LOGIN</h2><br />
                        <form >
                            <div class="formAcess">
                                <label for="name" class="input-fild">
                                    <input type="text" id="nomeEmpresa" name="nomeEmpresa"
                                        placeholder="Usuário:" required minlength="4"
                                        autofocus="autofocus" />
                                    <div class="underline"></div>
                                </label>
                            </div>
                            <div class="formAcess">
                                <label for="name" class="input-fild senha">
                                    <input type="text" id="nomeEmpresa" name="nomeEmpresa"
                                        placeholder="Senha:" required minlength="4" />
                                    <div class="underline"></div>
                                </label>
                            </div>

                            <h4>Esqueceu sua senha?</h4>
                
                            <button class="btn" onClick={()=> autentica()}>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;