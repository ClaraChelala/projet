import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {  BsBoxArrowUpRight } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Users = () => {

        const availableUsers = useSelector(state => state.users.users);
        console.log('availableUsers' , availableUsers);


        const rows = availableUsers.reduce(function (rows, key, index) { 
                return (index % 2 === 0 ? rows.push([key]) 
                  : rows[rows.length-1].push(key)) && rows;
              }, []);
              
        return (                  
                rows.map(row => ( 
                        <Container>
                        <Row>
                        {row.map(col => (
                                <Col id={col.id}>
                                        <div className="card">
                                        <div className="card-body">                    
                                        <h5 className="card-title">{col.name}</h5>
                                        <p className="card-text">{col.email}  </p>
                                        <p className="card-admin">{col.admin_flag} {col.id}</p>
                                        <p className="card-function">{col.fonction}</p>
                                        <p className="card-branche">{col.branche}</p>
                                        <div className= "iconsDiv">
                                        <span className="modifyBtn">
                                        <BsBoxArrowUpRight className="arrowUpIcon" /> <a href="#" className="card-link">Delete   </a>
                                        <BsBoxArrowUpRight className="arrowUpIcon" /> <a href="#" className="card-link">   Make Admin</a>
                                        </span>
                                        </div>
                                        </div></div>
                                </Col>                               
                                ))}
                        </Row>
                        </Container>
                      ))
                );
}
export default Users