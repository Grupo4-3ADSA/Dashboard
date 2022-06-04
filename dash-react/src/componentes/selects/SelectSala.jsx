import React, { useState, useEffect } from "react";
import api from '../../Api';
import '../../html-css-template/css/style-global.css';

function SelectSalas(props) {
    
    const [setRooms] = useState([]);

    const idPredio = sessionStorage.idPredio
    useEffect(() => {
        api.Api.get(`/rooms/${idPredio}`)
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    })

    return (
        <>
          <select id="select-sala" onChange={props.onChange}>
                <img src="" alt="" />
                <option value="valor1" selected >Selecione uma sala</option>
                {props.data.map(value => (
                <option key={value.idRoom} value={value.idRoom} >{value.name}</option>))}
            </select>
        </>
    )
}

export default SelectSalas;