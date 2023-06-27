import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./UserCard.css";
const UserCard = ({ email, first_name, last_name, avatar }) => {
  return (
    <Card className="container-fluid cd" style={{ width: "13rem", padding:"2erm"  }}>
      <Card.Img className="img" variant="top" src={avatar} style={{padding:"1rem"}} />
      <Card.Body className="name">
        <Card.Title>
          {first_name} {last_name}
        </Card.Title>
        <Card.Text>email={email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
