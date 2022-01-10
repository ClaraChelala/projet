import React, { Fragment, useEffect, useCallback, useState  } from 'react'
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {  BsBoxArrowUpRight } from "react-icons/bs";
import {BsFillTrashFill} from "react-icons/bs";
import { useSelector } from 'react-redux';
import { FiEye, FiPlus } from "react-icons/fi";
import { getallusers } from '../service/users';


const Users = () => {
        
        const [availableUsers,setavailableUsers ] = useState([])
        const availableUsersCallback = useCallback(
                async () => {
                        const result = await getallusers()
                        setavailableUsers(result)
                },
                [],
        ) 
        useEffect(() => {availableUsersCallback()}, [availableUsersCallback])

        // const availableUsers = useSelector(state => state.users.users);
        console.log('availableUsers' , availableUsers);
        const history = useHistory();
        const routeChange = () =>{ 
                let path = '/AddUser'; 
                history.push(path);
              }
        
        

        const rows = availableUsers.reduce(function (rows, key, index) { 
                return (index % 2 === 0 ? rows.push([key]) 
                  : rows[rows.length-1].push(key)) && rows;
              }, []);
              
        return ( 
                <Fragment>
                <div className="newPostBtn">
                        <Button onClick={routeChange} className="newPost" variant="primary">
                                <FiEdit3 />
                                </Button>{' '}
                </div>
                {rows.map(row => ( 
                        <Container>
                        <Row>
                        {row.map(col => (
                                <Col id={col.id}>
                                        <div className="card">
                                        <div className="card-body">                    
                                        <h5 className="card-title">{col.firstname}</h5>
                                        <p className="card-text">{col.email}  </p>
                                        {col.admin === true ? (<p className="card-admin"> Admin</p>):(<p className="card-admin"> Not an admin</p>)}
                                        <div className= "iconsDiv">
                                        <span className="modifyBtn">
                                        <BsFillTrashFill className="FillTrashFill" /> <a href="#" className="card-link">Delete   </a>
                                        <BsBoxArrowUpRight className="arrowUpIcon" /> <a href="#" className="card-link">   Make Admin</a>
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
export default Users