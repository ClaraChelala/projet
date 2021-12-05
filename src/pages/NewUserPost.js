import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import 'bootstrap/dist/css/bootstrap.css';
import { FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const NewUserPost = () => {
    const [topicData, setTopicData] = useState({ title: "", description: "" });
    const [errorMessage, setErrorMessage] = useState({ value: "" });
    const history = useHistory();
    const handleDiscard = (e) =>{
        history.push('/UserTopics')
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
            }));
        };
    }
    const availableTopics = useSelector(state => state.topics.topics);
    console.log(availableTopics);
    const availableBranches = useSelector(state => state.branches.branches);
    console.log(availableBranches);
    return (
        <div className="nTopic">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="title">
                    <Form.Label>Topic</Form.Label>
                    <Form.Control
                        as="select"
                        custom

                        

                    >
                      {availableTopics.map(topic => {
                            return (
                                <option value={topic.id}>{topic.title}</option>
                            );
                        })}
 
                    </Form.Control>
                </Form.Group>
                <br />


                <Form.Group size="lg" controlId="title">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control
                        as="select"
                        custom

                    >
                        {availableBranches.map(branche => {
                            return (
                                <option >{branche.name}</option>
                            );
                        })}
                        {/* <option value="Beirut">Beirut</option>
                        <option value="South">South</option>
                        <option value="North">North</option>
                    <option value="Bekaa">Bekaa</option> */}
                    </Form.Control>
                </Form.Group>
                <br />

                <Form.Group size="lg" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        name="title"
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Group>
                <br />

                <Form.Group size="lg" controlId="challenge">
                    <Form.Label>Challenge</Form.Label>
                    <Form.Control
                        type="text"
                        name="challenge"
                        as="textarea"
                        rows={4}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Group>
                <div className="btnSubmit">
                    <Button id="btnDiscard" block size="sm" onClick={handleDiscard}>
                        Discard Changes
                    </Button>
                    <br />
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

export default NewUserPost;