import React from "react";
import Botao from "../Botao";
import CampoDeTextoComBotao from "../CampoDeTextoComBotao";
import ItemDaLista from "./ItemDaLista";
import "./styles.css";

const Lista = ({
  titulo,
  items,
  deletarEstaLista,
  adicionarNovoItem,
  removerUmItemDaListaPeloIndice,
}) => {
  return (
    <div className="conteudoLista">
      <div style={{ display: "flex" }}>
        <h3 className="tituloDaLista">{titulo}</h3>
        <Botao
          acaoClicar={deletarEstaLista}
          texto="Deletar Lista"
          tipoHiperlink
        />
      </div>
      {items.map((textoDoItem, indice) => (
        <ItemDaLista
          textoDoItem={textoDoItem}
          removerEsteItem={() => removerUmItemDaListaPeloIndice(indice)}
        />
      ))}
      <CampoDeTextoComBotao
        acaoDoBotao={(tituloDoNovoItem) => {
          adicionarNovoItem(tituloDoNovoItem);
        }}
        tituloBotao={"Adicionar Item"}
      />
    </div>
  );
};

export default Lista;
