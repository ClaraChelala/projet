import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import 'bootstrap/dist/css/bootstrap.css';
import { FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const AddUser = () => {
    const [UserData, setUserData] = useState({ name: "", function: "",email:"" });
    const [errorMessage, setErrorMessage] = useState({ value: "" });
    const history = useHistory();
    const handleDiscard = (e) =>{
        history.push('/Users')
    }
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
        if (UserData.name === "" || UserData.function === "" || UserData.email === "") {
            setErrorMessage((prevState) => ({
                value: "Empty name/function/email field",
            }));
        };
    }
    
    const availableBranches = useSelector(state => state.branches.branches);
    
    return (
        <div className="nTopic">
            <Form onSubmit={handleSubmit}>
                
            <Form.Group size="lg" controlId="name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        name="Name"
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        name="Name"
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="Email"
                        default="exemple@gmail.com"
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Group>

                <Form.Group size="lg" controlId="branch">
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
                    </Form.Control>
                </Form.Group>
                

                <Form.Group size="lg" controlId="function">
                    <Form.Label>Function</Form.Label>
                    <Form.Control
                        type="text"
                        name="Function"
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

export default AddUser;