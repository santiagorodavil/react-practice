import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";


    // Si existe algun plato seleccionado, se va a hacer un "card" donde se muestre la foto, el nombre y la desccripcion del plato
    function RenderDish({dish}){
            return(
                <div key="comments" className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    }

    //Si existe algun plato seleccionado,  se van a mostrar los comentarios del plato seleccionado
    function RenderComment({comments}){
        if(comments !=null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>
                                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
    }

    const DishDetail = (props)=>{
        if(props.dish!=null){
            
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem> 
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>                   
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                    </div>
                    <div  className="row">
                        <RenderDish dish={props.dish}/>
                        <RenderComment comments={props.comments}/>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }



export default DishDetail;
