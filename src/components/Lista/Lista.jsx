import React from "react";
import CampoDeTextoComBotao from "../CampoDeTextoComBotao";
import "./styles.css";

const Lista = ({
  titulo,
  items,
  deletarEstaLista,
  adicionarNovoItem,
  removerUmItemDaListaPeloIndice,
}) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <h3>{titulo}</h3>

        <button type="button" onClick={() => deletarEstaLista()}>
          Deletar lista
        </button>
      </div>
      {items.map((textoDoItem, indice) => (
        <div className="itemLista">
          <p>{textoDoItem}</p>
          <button
            type="button"
            onClick={() => removerUmItemDaListaPeloIndice(indice)}
          >
            Remover
          </button>
        </div>
      ))}
      <CampoDeTextoComBotao
        acaoDoBotao={(tituloDoNovoItem) => {
          adicionarNovoItem(tituloDoNovoItem);
        }}
        tituloBotao={"Adicionar Item"}
      />
    </>
  );
};

export default Lista;
