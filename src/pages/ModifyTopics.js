import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FiPlus } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Add_Topic } from "../store/reducers/topicsActions";
import { useHistory } from "react-router-dom";
import Topic from "../data/topic";
const NewTopic = () => {
  const [topicData, setTopicData] = useState({ title: "", description: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useHistory();
const handleDiscard = (e) => {
  let path = '/AdminTopics'; 
  history.push(path);
}
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
      }

      
      ))}else{
        console.log("essai 1")
        const ok1 = new Topic(9,topicData.title,topicData.description)
        console.log(ok1)
        history.push('/AdminTopics')
      }
  };


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


export default NewTopic;