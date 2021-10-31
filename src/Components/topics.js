import React from 'react';
import "./Box.css"
import {Card} from "react-bootstrap";
import {
    Link
  } from "react-router-dom";
  import { BsFillPlusCircleFill} from "react-icons/bs";
const Topics = () => {
    const cardInfo=[
        {image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title:"topic 1",
        text:"this is the first topic",
        link:"/topic1"},
        {image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title:"topic 2",
        text:"this is the second topic",
        link:"/topic2" },
        {image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title:"topic 3",
        text:"this is the third topic" ,
        link:"/topic3"},
        {image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title:"topic 4",
        text:"this is the fourth topic",
        link:"/topic4" },
    ];

    const renderCard = (card,index) =>{
        return(
            <Card key={index} className="box" >
                    <Link to={card.link}>
                        <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
                        </Link>
                <Card.Body>
                    <Card.Title >{card.title}</Card.Title>
                    <Card.Text>
                    {card.text}
                    </Card.Text>
                    <button><BsFillPlusCircleFill></BsFillPlusCircleFill></button>
                </Card.Body>
            </Card>
        )
    }

    return(
        <div className="grid">
            {cardInfo.map(renderCard)}
        </div>
    )
}

export default Topics;