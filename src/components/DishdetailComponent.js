import React, {Component} from 'react';
import { CardImgOverlay, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
  constructor(props){
      super(props);

      this.state = {
          isModalOpen: false
      }

      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
  }

  handleSubmit(values) {
      console.log('Current State is: ' + JSON.stringify(values));
      alert('Current State is: ' + JSON.stringify(values));
      // event.preventDefault();
  }

  render() {
      return(
          <div>
              <Button outline onClick={this.toggleModal}> <span class="fa fa-pencil fa-lg"></span> Submit Comment</Button>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                  <ModalBody>
                      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                          
                          <Row className="form-group">
                              <Label htmlFor="rating" md={5}><strong>Rating</strong></Label>
                              <Col md={12}>
                                  <Control.select model=".rating" name="rating"
                                      className="form-control">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                  </Control.select>
                              </Col>
                          </Row>

                          <Row className="form-group">
                              <Label htmlFor="name" md={5}><strong>Your Name</strong></Label>
                              <Col md={12}>
                                  <Control.text model=".name" id="name" name="name"
                                      placeholder="Your Name"
                                      className="form-control"
                                      validators={{
                                          minLength: minLength(3), maxLength: maxLength(15)
                                      }}
                                      />
                                  <Errors
                                      className="text-danger"
                                      model=".name"
                                      show="touched"
                                      messages={{
                                          minLength: ' Must be greater than 2 characters',
                                          maxLength: ' Must be 15 characters or less'
                                      }}
                                  />
                              </Col>
                          </Row>
                          <Row className="form-group">
                              <Label htmlFor="author" md={5}><strong>Comment</strong></Label>
                              <Col md={12}>
                                  <Control.textarea model=".author" id="author" name="author"
                                      className="form-control" rows="5"/>
                              </Col>
                          </Row>
                          <Row className="form-group">
                              <Col>
                                  <Button type="submit" color="primary">
                                      Submit
                                  </Button>
                              </Col>
                          </Row>
                      </LocalForm>
                  </ModalBody>
              </Modal>
          </div>
          
      )
  }
}

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