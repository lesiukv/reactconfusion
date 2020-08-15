import React from 'react';
import { CardImgOverlay, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

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
          <CommentForm />
      </div>
    );
  } else return <div></div>;
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>                
        </div>
        <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else return <div></div>
}

export default DishDetail;  