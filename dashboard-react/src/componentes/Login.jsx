import React from "react";
import '../html-css-template/css/style.css';
import logoOncln from '../html-css-template/imagens/logo-cln.png'
import fundoLogin from '../html-css-template/imagens/fundo-login.png'

function Login(props) {
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
                        <form class="subtitle">
                            <label>Usário: <br /><input type="text" /></label>
                            <br />
                            <label>Senha: <br /><input type="text" /></label>
                            <br />
                            <h4>Esqueceu sua senha?</h4>
                            {/* onClick={window.location.href= "http://localhost:3000/componentes/DashGenerico"}  */}
                            <button class="btn">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;