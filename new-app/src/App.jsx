import Container from "react-bootstrap/esm/Container";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
      </Container>
      <AllTheBooks />
      <Container>
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
