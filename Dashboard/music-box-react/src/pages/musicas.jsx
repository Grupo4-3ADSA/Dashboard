import React from "react";
import ItemMusica from "../componentes/ItemMusica";
import Menu from "../componentes/Menu";

function Musicas() {
    return (
        <>

            <Menu />

            <div class="container">
                <div class="filter">
                    <button class="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                   
                    <ItemMusica
                        musica="in the end"
                        artista="linkin park"
                        genero="rock"
                        ano={2000}
                        id="1" 
                        />
                    <ItemMusica 
                        musica="capo de fusca"
                        artista="Mc Livinho"
                        genero="Poesia"
                        ano={2018}
                        id="1"
                        />
                    <ItemMusica />
                
                </div>
            </div>


        </>
    );
}

export default Musicas;