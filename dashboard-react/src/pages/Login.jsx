import React, { useState } from "react";
import '../html-css-template/css/style.css';
import logoOncln from '../html-css-template/imagens/logo-cln.png'
import fundoLogin from '../html-css-template/imagens/fundo-login.png'
import { useNavigate } from 'react-router-dom'
import autentica from '../Api'

function Login(props) {

    const navigate = useNavigate();
    const [login, setLogin] = useState([])
    const [senha, setSenha] = useState([])

    function autenticacao(e) {
        e.preventDefault();
        autentica.ApiLogin.post("/autenticacao", {
            login: login,
            senha: senha
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("Login feito com sucesso")
                    navigate("/dash-generico")
                } else{
                    console.log("login deu errado irmao" + response.status)
                }

            })

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
                        <form onSubmit={autenticacao}>
                            <div class="formAcess">
                                <label for="name" class="input-fild">
                                    <input type="text" id="nomeEmpresa" name="login" defaultValue={login}
                                        placeholder="Usuário:" required minlength="4"
                                        autofocus="autofocus" onChange={e => setLogin(e.target.value)} />
                                    <div class="underline"></div>
                                </label>
                            </div>
                            <div class="formAcess">
                                <label for="name" class="input-fild senha">
                                    <input type="password" id="nomeEmpresa" name="senha" defaultValue={senha}
                                        placeholder="Senha:" required minlength="4" onChange={e => setSenha(e.target.value)} />
                                    <div class="underline"></div>
                                </label>
                            </div>

                            <h4>Esqueceu sua senha?</h4>

                            <button class="btn" type="submit">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;