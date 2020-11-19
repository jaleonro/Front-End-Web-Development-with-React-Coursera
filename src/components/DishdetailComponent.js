import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                <li key={comment.id}><br></br>{comment.comment}<br></br>-- {comment.author}, --
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                .format(new Date(Date.parse(comment.date)))}</li>
                );
            });
            return(
                <div>
                    <h3>Comments</h3>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }


    render() {
    
    return (
    <div className="container">
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
            </div>
            <div  className="col-12 col-md-5 m-1">                
                {this.renderComments(this.props.dish)}
            </div>
        </div>
    </div>
    );
    }
}

export default DishDetail;
