import React, { Fragment } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FiEye, FiPlus } from "react-icons/fi";
import { useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";


const UserTopics = () => {

        const history = useHistory();

        const routeChange = () =>{ 
          let path = '/NewTopic'; 
          history.push(path);
        }

        const availablePosts = useSelector(state => state.posts.posts);

        const rows = availablePosts.reduce(function (rows, key, index) {
                return (index % 2 === 0 ? rows.push([key])
                        : rows[rows.length - 1].push(key)) && rows;
        }, []);
        return (
                <Fragment>
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
                                                                                                <FiPlus className="plusIcon" /> <a href="/NewUserPost" className="card-link">Add</a></span>                                                                               
                                                                                        <span className="ViewBtn">
                                                                                        <FiEye className="Fieye" />  <a href="#" className="card-link">View</a>
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
export default UserTopics;