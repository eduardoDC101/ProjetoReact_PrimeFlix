import React from "react";
import { Link } from "react-router-dom";
import "./erro.css";

export default function Erro() {
  return (
    <div className="Erro">
      <h1>404</h1>
      <p>Página não encontrada!</p>
      <Link to="/">Veja os filmes em cartaz</Link>
    </div>
  );
}
