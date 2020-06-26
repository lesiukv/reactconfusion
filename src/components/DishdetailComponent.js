import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';

function RenderDish({dish}) {
  if (dish !=null) {
  return (
    <div className="col-12 col-md-5 m-1" >
      <Card>
        <CardImg top width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
  } else return <div></div>;
}

function RenderComments({comments}) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map( ( comment ) => {
                return (
                  <div key={comment.id}>
                    {comment.comment}<br /> <div class="mb-3">--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                  </div>
              );}
            )}
          </ul>
        
      </div>
    );
  } else return <div></div>;
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else return <div></div>
}

export default DishDetail;  