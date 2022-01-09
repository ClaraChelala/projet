import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router-dom";


const Signin = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (userData.username === "admin" && userData.password === "123456") {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("isAdmin", "true");
      window.location.pathname = "/AdminTopics";
    } else if(userData.username === "user" && userData.password === "123456") {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("isAdmin", "false");
      window.location.pathname = "/UserTopics";
    }
    else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    }
  };
  const history = useHistory();
  const routeChange = () =>{ 
    let path = '/ChangePass'; 
    history.push(path);
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="username"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <div className="btnSubmit">
        <Button block size="lg" type="submit" onClick={handleSubmit}>
          Login
        </Button>
        </div>
        <div className="btnPass">
          <Button onClick={routeChange}>
          Change password
        </Button>
        </div>
            {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
       )}
      </Form>
    </div>
  );        
}

export default Signin;