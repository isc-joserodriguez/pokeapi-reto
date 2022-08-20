import { useState, useEffect } from "react";
import { FormComponent } from "../components/Form";
import Tabla from "../components/Tabla";
import { getAll } from "../services/pokemon";

const HomePage = () => {
  const [pokemones, setPokemones] = useState([
    {
      name: "",
      order: "",
    },
  ]);

  const getAllFunction = async () => {
    const pokemonesList = await getAll();
    setPokemones(pokemonesList);
  };

  const mostrarPokemon = (name, order) => {
    setPokemones([
      {
        name,
        order,
      },
    ]);
  };

  useEffect(() => {
    getAllFunction();
  }, []);

  return (
    <>
      <FormComponent mostrarPokemon={mostrarPokemon} getAllFunction={getAllFunction} />
      <Tabla pokemones={pokemones} />
    </>
  );
};

export default HomePage;
