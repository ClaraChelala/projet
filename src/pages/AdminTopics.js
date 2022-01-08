import React, { Fragment } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FiEye, FiPlus,FiEdit3 } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import {BsFillTrashFill} from "react-icons/bs";


const AdminTopics = () => {
        const history = useHistory();
        const hancleClick = {

        }
        const handleAdd =(e) => {
                let path  = '/NewAdminPost';
                history.push(path);
        }
 

        const routeChange = () =>{ 
          let path = '/NewTopic'; 
          history.push(path);
        }

        const availableTopics = useSelector(state => state.topics.topics);

        const rows = availableTopics.reduce(function (rows, key, index) {
                return (index % 2 === 0 ? rows.push([key])
                        : rows[rows.length - 1].push(key)) && rows;
        }, []);
        return (
                <Fragment>
                        <div className="newPostBtn">
                                <Button onClick={routeChange} className="newPost" variant="primary">
                                        <FiEdit3 />
                                        </Button>
                        </div>
                        {rows.map(row => (
                                <Container>
                                        <Row>
                                                {row.map(col => (
                                                        <Col id={col.id}>
                                                                <div className="card">
                                                                        <div className="card-body">
                                                                                <h5 className="card-title" >   {col.title}</h5>
                                                                                <p className="card-text">{col.description}</p>
                                                                                <div className="iconsDiv">
                                                                                        <span className="addBtn">
                                                                                                <FiPlus className="plusIcon" /> <a href="/NewAdminPost"className="card-link">Add</a></span>
                                                                                        <span className="modifyBtn">
                                                                                                <BsFillTrashFill className="FillTrashFill" /> <a href="" className="card-link">Delete</a>
                                                                                        </span>
                                                                                        <span className="ViewBtn">
                                                                                        <FiEye className="Fieye" /> <a href="#" className="card-link">View</a>
                                                                                        </span>
                                                                                </div>
                                                                        </div></div>
                                                        </Col>
                                                ))}
                                        </Row>
                                </Container>

                        ))}</Fragment>
        );

}
export default AdminTopics