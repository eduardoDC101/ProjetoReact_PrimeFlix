import React from "react";
import { useState, useEffect } from "react";
import api from "../../services/api";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const resposta = await api.get("movie/now_playing", {
        params: {
          api_key: "0b6e6c26ce311127775a7eb18f01f290",
          language: "pt-BR",
          page: 1,
        },
      });

      console.log(resposta.data.results);
    }

    loadFilmes();
  }, []);

  return (
    <div>
      <h1> BEM VINDO A HOME</h1>
    </div>
  );
}
