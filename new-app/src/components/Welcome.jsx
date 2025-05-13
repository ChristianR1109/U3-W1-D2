import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <Alert variant="success" className="mt-5 mb-5">
      <Alert.Heading>BENVENUTI NEL MIO SHOP</Alert.Heading>
      <p>SOTTOTITOLO PER IL MIO SHOP!</p>
    </Alert>
  );
};

export default Welcome;
