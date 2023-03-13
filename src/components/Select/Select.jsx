import React from "react";
import Card from "react-bootstrap/Card";
const Select = () => {
  return (
    <Card
      style={{
        width: "18rem",
        marginTop: "70px",
        marginLeft: "40%",
      }}
    >
      <Card.Img
        variant="top"
        src="https://i.pinimg.com/236x/8e/30/11/8e3011152367a9da6cd29f88520ef720.jpg"
      />
      <Card.Body>
        <Card.Title>Шакшука</Card.Title>
        <Card.Text>Favorite</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Select;
