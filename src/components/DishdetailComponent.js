import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

  render() {
    const comments = this.props.dish.comments.map((comment) => {
        return (
        <li key={comment.id}><br></br>{comment.comment}<br></br>-- {comment.author}, {comment.date}</li>
        );
    });

    return (
    <div className="row">
        <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        <div  className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            <ul className="list-unstyled">
                {comments}
            </ul>
        </div>
    </div>
    );
  }
}

export default DishDetail;
