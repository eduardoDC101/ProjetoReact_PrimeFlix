import React from "react";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const resposta = await api.get("movie/now_playing", {
        params: {
          api_key: "0b6e6c26ce311127775a7eb18f01f290",
          language: "pt-BR",
          page: 1,
        },
      });

      //console.log(resposta.data.results.slice(0, 10));
      setFilmes(resposta.data.results.slice(0, 20));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <Link to={`/filme/${filme.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  alt={filme.title}
                />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
