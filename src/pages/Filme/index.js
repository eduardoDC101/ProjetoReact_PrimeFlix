import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import "./filme-info.css";

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "0b6e6c26ce311127775a7eb18f01f290",
            language: "pt-BR",
          },
        })
        .then((response) => {
          console.log(response.data);
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
          setLoading(false);
        });
    }

    loadFilme();
  }, [id]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avalição: {filme.vote_average} /10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a href=".">Trailer</a>
        </button>
      </div>
    </div>
  );
}
