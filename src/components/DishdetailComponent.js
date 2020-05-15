import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {
  
  render() {
    if (this.props.dish != null ) {
      let dishComments = this.props.dish.comments.map( ( comment ) => {
        return (
          <div key={comment.id}>
            {comment.comment}<br /> <div class="mb-3">--{comment.author}, {comment.date.substring(0,10)}</div>
          </div>
        );
      });  
        return (
          <div className="row" >
            <div className="col-12 col-md-5 m-1" >
              <Card>
                <CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <div>
                {dishComments}
              </div>
            </div>
          </div>
        );
      } else {
        return(<div></div>);
    }
  } 
}

export default DishDetail;