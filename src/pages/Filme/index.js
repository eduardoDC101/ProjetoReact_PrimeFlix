import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

import "./filme-info.css";

export default function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

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
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
          navigate("/", { replace: true });
          return;
        });
    }

    loadFilme();
  }, [navigate, id]);

  function SalvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasfilme = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filme.id
    );

    if (hasfilme) {
      toast.warn("Filme já está na lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  const getCorNote = (nota) => {
    if (nota <= 4) return "red";
    if (nota > 4 && nota <= 7) return "orange";
    return "green";
  };

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong style={{ color: getCorNote(filme.vote_average) }}>
        Avalição: {filme.vote_average} /10
      </strong>

      <div className="area-buttons">
        <button onClick={SalvarFilme}>Salvar</button>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}
        >
          <button>Trailer</button>
        </a>
      </div>
    </div>
  );
}
