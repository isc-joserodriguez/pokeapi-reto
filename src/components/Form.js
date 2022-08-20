import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getPokemon } from "../services/pokemon";

import "./styles.css";

export const FormComponent = ({ mostrarPokemon, getAllFunction }) => {
  const [nombre, setNombre] = useState("");
  const onChanged = (e) => {
    if (e.target.value === "") {
      getAllFunction();
    }
    setNombre(e.target.value);
  };
  const onSubmited = async (e) => {
    e.preventDefault();
    const { name, weight, order } = await getPokemon(nombre.toLowerCase());
    alert(`${name} pesa ${(weight * 0.453592).toFixed()} kilos`);
    mostrarPokemon(name, order);
  };

  return (
    <form
      onSubmit={onSubmited}
      className="d-flex justify-content-center align-items-center"
    >
      <Form.Label>Nombre:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Nombre"
        id="input"
        className="mx-3"
        onChange={onChanged}
        defaultValue={nombre}
      />
      <Button variant="success" type="submit">
        Buscar
      </Button>
    </form>
  );
};
