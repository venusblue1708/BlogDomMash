import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#d6ccc2" }}>
        <Container>
          <Link className="link" to="/">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/3916/3916996.svg?token=exp=1678696707~hmac=99e575bb84f02ee997ea7c56d35c7465"
              alt="error"
              style={{ width: "20px", marginBottom: "8px", marginRight: "5px" }}
            />
            <Navbar.Brand id="link">Home</Navbar.Brand>
          </Link>
          <Link className="link" to="/add-blog">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3914/3914337.png"
              alt="error"
              style={{ width: "20px", marginBottom: "8px", marginRight: "5px" }}
            />
            <Navbar.Brand id="link">Add Blog</Navbar.Brand>
          </Link>
          <Link className="link" to="/contacts">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3917/3917546.png"
              alt="error"
              style={{ width: "20px", marginBottom: "8px", marginRight: "5px" }}
            />
            <Navbar.Brand id="link">Contacts</Navbar.Brand>
          </Link>
          <Link className="link" to="/select">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/3916/3916600.svg?token=exp=1678696985~hmac=07dd7197360b7b3b38754880fab88864"
              alt="error"
              style={{ width: "20px", marginBottom: "8px", marginRight: "5px" }}
            />
            <Navbar.Brand id="link">Select</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
