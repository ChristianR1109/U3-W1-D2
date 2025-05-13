import { Container, Col, Image, Row } from "react-bootstrap";
import books from "../data/books.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const AllTheBooks = function () {
  return (
    <Container fluid="xxl">
      <Row xs={2} md={3} lg={4} className="m-0">
        {books.map((book) => (
          <Col key={book.asin}>
            <Card style={{ height: "99%" }}>
              <Card.Img src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}€</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
