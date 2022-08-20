import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <HomePage />
      </Container>
      <Footer />
    </>
  );
}

export default App;
