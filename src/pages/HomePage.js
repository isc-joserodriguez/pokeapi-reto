import { useState, useEffect } from "react";
import { FormComponent } from "../components/Form";
import Tabla from "../components/Tabla";
import { getAll } from "../services/pokemon";

const HomePage = () => {
  const [pokemones, setPokemones] = useState([]);

  const getAllFunction = async () => {
    const pokemonesList = await getAll();
    setPokemones(pokemonesList);
  };

  useEffect(() => {
    getAllFunction();
  }, []);

  return (
    <>
      <FormComponent />
      <Tabla pokemones={pokemones} />
    </>
  );
};

export default HomePage;
