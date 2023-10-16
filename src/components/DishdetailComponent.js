import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    // Si existe algun plato seleccionado, se va a hacer un "card" donde se muestre la foto, el nombre y la desccripcion del plato
    renderDish(dish){
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
    renderComment(comments){
        return(
            <div>
                <h3>Comments</h3>
                {comments}
            </div>
        );

        
    }

    render(){
        if(this.props.dish!=null){
            const comments = this.props.dish.comments.map((comment) => {
                return(
                    <div key={comment.id} className="col-12 col-md-10">
                        {comment.comment}
                        <p>
                            -- {comment.author}, {comment.date}
                        </p>
                    </div>
                );
            });
            
            return(
                <div  className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComment(comments)}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

}

export default DishDetail;
