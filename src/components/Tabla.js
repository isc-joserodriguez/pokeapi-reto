import { Table } from "react-bootstrap";

const Tabla = ({ pokemones }) => {
  const pokeInfo = pokemones.map((pokemon, index) => (
    <tr>
      <td>{index + 1}</td>
      <td style={{ textTransform: "capitalize" }}>{pokemon.name}</td>
    </tr>
  ));

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>{pokeInfo}</tbody>
    </Table>
  );
};

export default Tabla;
