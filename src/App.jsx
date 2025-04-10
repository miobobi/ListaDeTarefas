import React, { useState, useEffect } from "react";
import ListaTarefas from "./componentes/ListaTarefas.jsx";
import "./styles/index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Minha Lista de Tarefas</h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>

      <ListaTarefas />
    </div>
  );
};

export default App;
