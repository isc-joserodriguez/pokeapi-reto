import axios from "axios";

const rootPath = "https://pokeapi.co/api/v2/pokemon?limit=20";

export const getAll = async () => {
  const {
    data: { results },
  } = await axios.get(rootPath);
  return results;
};
