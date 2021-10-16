import React, { useCallback, useState } from "react";
import Botao from "../../components/Botao";
import CampoDeTexto from "../../components/CampoDeTexto";
import CampoDeTextoComBotao from "../../components/CampoDeTextoComBotao";
import Lista from "../../components/Lista/Lista";
import "./styles.css";

const MinhaLista = () => {
  const [listas, setListas] = useState([]);

  const adicionarLista = useCallback((tituloDaNovaLista) => {
    if (tituloDaNovaLista) {
      setListas((listas) => [
        ...listas,
        { titulo: tituloDaNovaLista, items: [] },
      ]);
    } else {
      alert("Opa, você esqueceu de dar um nome para sua lista!");
    }
  }, []);

  const funcaoAdicionarNovoItem = useCallback((indiceDaLista, tituloDoItem) => {
    setListas((listas) => {
      const novaLista = [...listas];
      novaLista[indiceDaLista].items.push(tituloDoItem);
      return novaLista;
    });
  }, []);

  const funcaoRemoverUmItemDaLista = useCallback(
    (indiceDaLista, indiceDoItem) => {
      setListas((listas) => {
        const novaLista = [...listas];
        novaLista[indiceDaLista].items = novaLista[indiceDaLista].items.filter(
          (_, index) => index !== indiceDoItem
        );
        return novaLista;
      });
    },
    []
  );

  const funcaoDeletarLista = useCallback((indexParaDeletar) => {
    setListas((listas) =>
      listas.filter((_, index) => index !== indexParaDeletar)
    );
  }, []);

  return (
    <div className="conteudo">
      <h1 className="titulo">Minhas Listas</h1>
      <CampoDeTextoComBotao
        acaoDoBotao={adicionarLista}
        tituloBotao={"Criar Lista"}
      />
      {listas.map((item, index) => (
        <Lista
          titulo={item.titulo}
          items={item.items}
          removerUmItemDaListaPeloIndice={(indiceDoItem) =>
            funcaoRemoverUmItemDaLista(index, indiceDoItem)
          }
          adicionarNovoItem={(tituloDoItem) =>
            funcaoAdicionarNovoItem(index, tituloDoItem)
          }
          deletarEstaLista={() => funcaoDeletarLista(index)}
        />
      ))}
    </div>
  );
};

export default MinhaLista;
