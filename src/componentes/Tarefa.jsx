import React from "react";
import "../styles/Tarefa.css";

export default function Tarefa({ tarefa, alternarTarefa, removerTarefa }) {
  return (
    <li className={`task-item ${tarefa.concluida ? "completed" : ""}`}>
      <span>{tarefa.texto}</span>
      <div className="task-buttons">
        <button className="complete-button" onClick={() => alternarTarefa(tarefa.id)}>
          {tarefa.concluida ? "Desmarcar" : "Concluir"}
        </button>
        <button className="delete-button" onClick={() => removerTarefa(tarefa.id)}>
          Excluir
        </button>
      </div>
    </li>
  );
}
