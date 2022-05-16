import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import api from '../Api'
import '../html-css-template/css/style-global.css';
import NavSupEsquerdo from '../componentes/navbar/NavSupEsquerdo';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import BtnsDirecionar from '../componentes/btns-home/btns-home';
import ImgDesfazer from '../html-css-template/imagens/desfazer.png';
import ListaHome from "../componentes/listas/ListaHome";

function Home(props) {
    const navigate = useNavigate();

    const [rooms, setRooms] = useState([]);
    console.log(rooms)

    useEffect(() => {
        api.Api.get("/rooms")
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

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
                    <h2 >Com o nosso sistema você não emitiu 0,4 de co2 economizando R$ 20,00</h2>
                    <BtnsDirecionar />
                    <div className="box-salas">
                        <div className="box-list">
                            <h2 className="title-list">Salas que estão mais consumindo neste momento:</h2>
                            <div className="list">
                                <ul>
                                    {
                                        rooms.map(rooms => (
                                            <ListaHome
                                                name={rooms.name}
                                                floor={rooms.floor}
                                            />
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home;