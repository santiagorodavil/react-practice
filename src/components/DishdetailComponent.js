import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    // Si existe algun plato seleccionado, se va a hacer un "card" donde se muestre la foto, el nombre y la desccripcion del plato
    function RenderDish({dish}){
        if(dish!=null){
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
        else{
            return(
                <div></div>
            );
        }
    }

    //Si existe algun plato seleccionado,  se van a mostrar los comentarios del plato seleccionado
    function RenderComment({comments}){
        return(
            <div>
                <h3>Comments</h3>
                {comments}
            </div>
        );
    }

    const DishDetail = (props)=>{
        if(props.dish!=null){
            const comments = props.dish.comments.map((comment) => {
                return(
                    <div key={comment.id} className="col-12 col-md-10">
                        {comment.comment}
                        <p>
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </div>
                );
            });
            
            return(
                <div className="container">
                <div  className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComment comments={comments}/>
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
