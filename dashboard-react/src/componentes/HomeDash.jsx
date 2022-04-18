import React from "react";
import '../html-css-template/css/style.css';
import ImgPainelControle from '../html-css-template/imagens/painel-controle.png'
import ImgCentralAjuda from '../html-css-template/imagens/central-ajuda.png';
import ImgRelatorio from '../html-css-template/imagens/relatorio.png'

function Home(props) {
    return (
        <>
            <div class="box-conteudo-home">
                <h2>Com o nosso sistema você não emitiu 0,4 de co2 economizando R$ 20,00</h2>
                <div class="btns-direcionar">
                    <div class="direcionar-conteudo">
                        <img src={ImgPainelControle} alt="" />
                        <h4>Painel de controle</h4>
                    </div>
                    <div class="direcionar-conteudo">
                        <img src={ImgRelatorio} alt="" />
                        <h4>Relatório de fatura</h4>
                    </div>
                    <div class="direcionar-conteudo">
                        <img src={ImgPainelControle} alt="" />
                        <h4>Cadastros</h4>
                    </div>
                    <div class="direcionar-conteudo">
                        <img src={ImgCentralAjuda} alt="" />
                        <h4>Central de ajuda</h4>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home;