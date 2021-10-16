import React from "react";
import "./styles.css";
/**
 *
 * @param textoDica placeholder
 * @param acaoAoMudarTexto onChange
 */
export default function CampoDeTexto({ textoDica, acaoAoMudarTexto, texto }) {
  return (
    <input
      className="campo-de-texto"
      type="text"
      value={texto}
      placeholder={textoDica}
      onChange={(evento) => {
        acaoAoMudarTexto(evento.target.value);
      }}
    />
  );
}
