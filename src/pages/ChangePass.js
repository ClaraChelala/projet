import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
const ChangePassword = () => {
  const [passwordData, setPasswordData] = useState({ email:"",newpass:"",currentpass:"", newpassconf:"" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useHistory();
const handleDiscard = (e) => {
  let path = '/Signin'; 
  history.push(path);
}
  const handleInputChange = (e) => {
    setPasswordData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordData.email === "" || passwordData.newpass === "" || passwordData.currentpass === "" || passwordData.newpassconf ==="" ) {
      setErrorMessage((prevState) => ({
        value: "Empty fields",
      }

      
      ))}else if (passwordData.newpass != passwordData.newpassconf){
        setErrorMessage((prevState) => ({
          value: "New password and confirmation are different",
      }))}
      else{
        history.push('/Signin')
      }
  };


  return (
    <div className="nTopic">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="title">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="email"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="description">
          <Form.Label>Current password</Form.Label>
          <Form.Control
            type="text"
            name="currentpass"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="description">
          <Form.Label>New password</Form.Label>
          <Form.Control
            type="text"
            name="newpass"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="description">
          <Form.Label>Confirm new password</Form.Label>
          <Form.Control
            type="text"
            name="newpassconf"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <div className="btnSubmit">
        <Button id="btnDiscard" block size="sm" onClick={handleDiscard}>
          Discard Changes
        </Button>
        <br/>
        <Button block size="sm" type="submit" onClick={handleSubmit}>
          Save
        </Button>
        </div>
            {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
       )}
      </Form>
    </div>
    
  );
}        


export default ChangePassword;