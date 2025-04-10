import React, { useEffect, useState } from "react";
import Tarefa from "./Tarefa.jsx";
import "../styles/ListaTarefas.css";

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem('tarefas')) || []);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, concluida: false }]);
    setNovaTarefa("");
  };

  const alternarTarefa = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])

  return (
    <div className="lista-tarefas">
      <div className="input-container">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <button className="add-button" onClick={adicionarTarefa}>
          Adicionar
        </button>
      </div>

      <ul className="task-list">
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            alternarTarefa={alternarTarefa}
            removerTarefa={removerTarefa}
          />
        ))}
      </ul>
    </div>
  );
}
