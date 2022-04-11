import React from "react";
import logoVerde from '../html-css-template/imagens/fundo-login.png'

function Menu() {
    return (
        <>
            <nav>
                <div class="container">
                    <img src={logoVerde} alt="Logo" class="logo" />
                </div>
            </nav>
        </>
    )
}

export default Menu;