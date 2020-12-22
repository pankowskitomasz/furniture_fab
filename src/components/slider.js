import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Carousel from "../../node_modules/react-bootstrap/Carousel";
import Button from "../../node_modules/react-bootstrap/Button";

class Slider extends Component{
    render(){
        return(        
            <Container fluid className={"index-slider d-flex align-items-center p-0 bg-secondary h-100vh max-600 "+this.props.classExt}>
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={12} className="mx-auto text-shadow text-white p-0">
                        <Carousel>
                            <Carousel.Item className="bg-secondary">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh max-600 fit-cover mix-multiply"
                                    src="img/slider/slide-1.jpg"/>
                                <Carousel.Caption className="mb-5 font-weight-bold">
                                    <h1 className="font-logo font-big">
                                        Premium Collection
                                    </h1>
                                    <p className="initialism">
                                        Our premium collection is dedicated for those customers who want
                                        best quality premium products.
                                    </p>
                                    <Link to="/premium">
                                        <Button variant="outline-light" className="rounded-pill font-weight-bold">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-secondary">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh max-600 fit-cover mix-multiply"
                                    src="img/slider/slide-2.jpg"/>
                                <Carousel.Caption className="mb-5 font-weight-bold">
                                    <h1 className="font-logo font-big">
                                        Optimum Collection
                                    </h1>
                                    <p className="initialism">
                                        Our Optimum collection is dedicated for every day use, everywhere 
                                        where quality and good taste matters.
                                    </p>
                                    <Link to="/optimum">
                                        <Button variant="outline-light" className="rounded-pill font-weight-bold">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-secondary">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh max-600 fit-cover mix-multiply"
                                    src="img/slider/slide-3.jpg"/>
                                <Carousel.Caption className="mb-5 font-weight-bold">
                                    <h1 className="font-logo font-big">
                                        Contact now
                                    </h1>
                                    <p className="initialism">
                                        Our employees are for your disposal and answer all your questions.
                                        Contact us online, by phone or personally. 
                                    </p>
                                    <Link to="/contact">
                                        <Button variant="outline-light" className="rounded-pill font-weight-bold">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Slider;