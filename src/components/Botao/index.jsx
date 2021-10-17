import React from "react";
import "./styles.css";

export default function Botao({ texto, acaoClicar, tipoHiperlink }) {
  if (tipoHiperlink) {
    return (
      <button
        type="button"
        className="botaoHiperlink"
        onClick={() => acaoClicar()}
      >
        {texto}
      </button>
    );
  }

  return (
    <button
      type="button"
      className="botaoPrimario"
      onClick={() => acaoClicar()}
    >
      {texto}
    </button>
  );
}
