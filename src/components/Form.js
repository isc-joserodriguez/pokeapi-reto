import { Button, Form } from "react-bootstrap";

import './styles.css'

export const FormComponent = () => {
  return (
    <section className="d-flex justify-content-center align-items-center">
      <Form.Label>Nombre:</Form.Label>
      <Form.Control type="text" placeholder="Nombre" id = "input" className="mx-3"/>
      <Button variant="success">Buscar</Button>
    </section>
  );
};
