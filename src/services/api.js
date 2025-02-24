import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;

//https://api.themoviedb.org/3/movie/now_playing?api_key=0b6e6c26ce311127775a7eb18f01f290&language=pt-BR

//URL BASE: https://api.themoviedb.org/3/

//CHAVE: 0b6e6c26ce311127775a7eb18f01f290
