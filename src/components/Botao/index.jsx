import React from "react";
import "./styles.css";

export default function Botao({ texto, acaoClicar }) {
  return (
    <button
      type="button"
      className="botao-primario"
      onClick={() => acaoClicar()}
    >
      {texto}
    </button>
  );
}
