import React, { useState } from "react";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-modais.css';
import atencao from '../../html-css-template/imagens/atencao.png';
import ModalEditar from '../modais/ModalCadastro';
import Api from '../../Api';

function ListaSalas(props) {

    /*   const [showModalEditar, setShowshowModalEditar] = useState(false)
      const showOrHideEditar = () => setShowshowModalEditar(true)
  
      var idSalaSelecionada = props.idRoom */

       function openModalEditar() {
          /*  idSalaSelecionada = idSala */
           props.showOrHideEditar(true)
       }

    const [showModalEditar, setShowModalEditar] = useState(false)
    const showOrHideEditar = () => setShowModalEditar(true)

    return (
        <>

            <li>
                <thead>
                    <tr>
                        <td class="td-lista">{props.name}</td>
                        <td class="td-lista">{props.floor}</td>
                        <td class="td-lista"><img src={atencao} alt="" /></td>
                        <td class="td-lista-editar-deletar">
                            <button className="editar" onClick={props.openModalEditar} >Editar/</button>
                            <button className="deletar"/*  onClick={showOrHide} */>Deletar</button>
                        </td>
                        <td class="td-lista"><a href="/painel-controle-salas">Acessar</a> </td>
                    </tr>
                </thead>
            </li>

           {/*  {showModalEditar ? <ModalEditar /> : <></>} */}

        </>
    )

}

export default ListaSalas;