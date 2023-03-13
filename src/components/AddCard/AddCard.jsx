import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AddCard = ({ item }) => {
  return (
    <Card style={{ width: "18rem", marginTop: "20px", marginRight: "40px" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.fullness} хватает сытности</Card.Text>
        <Card.Text>{item.category}</Card.Text>
        <Button
          style={{
            backgroundColor: "#76c893",
            border: "none",
            color: "#f4f1de",
          }}
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddCard;
