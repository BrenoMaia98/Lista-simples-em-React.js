import React, { useState } from "react";
import Botao from "../../Botao";
import "./styles.css";
export default function ItemDaLista({ textoDoItem, removerEsteItem }) {
  const [marcado, setMarcado] = useState(false);

  return (
    <div className="itemLista">
      <input
        type="checkbox"
        className="caixaDeSelecao"
        defaultChecked={marcado}
        onChange={() => {
          setMarcado(!marcado);
        }}
      />
      <p className="textoDoItem">
        {marcado ? <strike>{textoDoItem}</strike> : textoDoItem}
      </p>
      <Botao acaoClicar={removerEsteItem} texto="Remover" tipoHiperlink />
    </div>
  );
}
