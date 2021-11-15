import React, { Fragment } from 'react'
import { FiEdit3 } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const UserPosts = () => {
        
    const availablePosts = useSelector(state => state.posts.posts);
    console.log('availableposts' , availablePosts);
        const history = useHistory();
        
        const routeChange = () =>{ 
            let path = '/NewUserPost'; 
            history.push(path);
          }
          const rows = availablePosts.reduce(function (rows, key, index) { 
            return (index % 1 === 0 ? rows.push([key]) 
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
                                                                    <h5 className="card-title" >   {col.title}</h5>
                                                                    <p className="card-date">{col.date}</p>
                                                                    <p className="card-text">{col.content}</p>
                                                                    <div className="iconsDiv">
                                                                           
                                                                           
                                                                    </div>
                                                            </div></div>
                                            </Col>
                                    ))}
                            </Row>
                    </Container>

            ))}</Fragment>
);

}
    
    export default UserPosts;