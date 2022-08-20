import axios from "axios";

const rootPath = "https://pokeapi.co/api/v2/pokemon";

export const getAll = async () => {
  const {
    data: { results },
  } = await axios.get(`${rootPath}?limit=20`);
  return results;
};

export const getPokemon = async (nombre) => {
  const {
    data,
  } = await axios.get(`${rootPath}/${nombre}`);
  console.log(data)
  return data;
};
