import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
import { FiPlus } from "react-icons/fi";

const NewTopic = () => {
  const [topicData, setTopicData] = useState({ title: "", description: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });


  const handleInputChange = (e) => {
    setTopicData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topicData.title === "" || topicData.description === "") {
      setErrorMessage((prevState) => ({
        value: "Empty title/description field",
      }));
  };
}

  return (
    <div className="nTopic">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="title">
          <Form.Label>Topic Title</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="title"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            as="textarea" 
            rows={4}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <div className="btnSubmit">
        <Button id="btnDiscard" block size="sm">
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

export default NewTopic;