import React, { Fragment } from 'react'
import { FiEdit3 } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "./UserPosts.css";


const UserPosts = () => {

    const history = useHistory();
    
    const routeChange = () =>{ 
        let path = '/NewUserPost'; 
        history.push(path);
      }

    return (
        <Fragment>
            <div className="newPostBtn">
                <Button onClick={routeChange} className="newPost" variant="primary">
                    <FiEdit3 classname ="FiEdit3"/></Button>{' '}
            </div>
        </Fragment>
    );

}
export default UserPosts