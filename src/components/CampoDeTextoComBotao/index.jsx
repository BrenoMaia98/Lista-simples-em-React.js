import React, { useState } from "react";
import Botao from "../Botao";
import CampoDeTexto from "../CampoDeTexto";
import "./styles.css";
/**
 *
 * @param  acaoDoBotao (valorDoCampoTexto) => void
 * @param  tituloBotao string
 */
export default function CampoDeTextoComBotao({ acaoDoBotao, tituloBotao }) {
  const [texto, setTexto] = useState("");

  return (
    <div className="container">
      <CampoDeTexto
        acaoAoMudarTexto={(texto) => {
          setTexto(texto);
        }}
        texto={texto}
        textoDica={"Digite aqui..."}
      />
      <div className="espacamentoBotao">
        <Botao
          acaoClicar={() => {
            setTexto("");
            acaoDoBotao(texto);
          }}
          texto={tituloBotao}
        />
      </div>
    </div>
  );
}
