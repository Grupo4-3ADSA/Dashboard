import React from "react";
import '../html-css-template/css/style.css';
import '../html-css-template/css/style-componentes.css';
import ImgPainelControle from '../html-css-template/imagens/painel-controle.png';
import ImgCentralAjuda from '../html-css-template/imagens/central-ajuda.png';
import ImgRelatorio from '../html-css-template/imagens/relatorio.png';
import ImgCadastrarEditar from '../html-css-template/imagens/edicad.png';
import ImgAlerta from '../html-css-template/imagens/atencao.png';

function Home(props) {
    return (
        <>
            <div className="container-conteudo">
                <h2>Com o nosso sistema você não emitiu 0,4 de co2 economizando R$ 20,00</h2>
                <div className="btns-direcionar">
                    <div className="btn-dorecionar">
                        <img src={ImgPainelControle} alt="" />
                        <h4>Painel de controle</h4>
                    </div>
                    <div className="btn-dorecionar">
                        <img src={ImgRelatorio} alt="" />
                        <h4>Relatório de fatura</h4>
                    </div>
                    <div className="btn-dorecionar">
                        <img src={ImgCadastrarEditar} alt="" />
                        <h4>Cadastros</h4>
                    </div>
                    <div className="btn-dorecionar">
                        <img src={ImgCentralAjuda} alt="" />
                        <h4>Central de ajuda</h4>
                    </div>

                </div>
                <div className="box-salas">
                    <div className="box-list">
                        <h2 className= "title-list">Salas que estão mais consumindo neste momento:</h2>
                        <div className="list">
                            <ul>
                                <li className="li-box-salas"><img src={ImgAlerta} alt="" /><h3>Sala1 <br /> Andar 2</h3> </li>                            
                                <li className="li-box-salas"><img src={ImgAlerta} alt="" /><h3>Sala1 <br /> Andar 2</h3> </li>                            
                                <li className="li-box-salas"><img src={ImgAlerta} alt="" /><h3>Sala1 <br /> Andar 2</h3> </li>                            
                                <li className="li-box-salas"><img src={ImgAlerta} alt="" /><h3>Sala1 <br /> Andar 2</h3> </li>                            
                                <li className="li-box-salas"><img src={ImgAlerta} alt="" /><h3>Sala1 <br /> Andar 2</h3> </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home;