import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutExt extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-white">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Quality
                            </h3>
                            <p className="initialism">
                                Quality, innovation, passion these are the values which associate optimum 
                                to premium collection.
                            </p>
                            <p className="initialism">
                                Bredaquaranta means quality in interior design and in the selection of most 
                                exclusive furniture collections. Passion for elegance, awareness of Made in 
                                Italy values, knowledge of our tradition and the story of industrial design 
                                together with research and innovation, makes of bredaquaranta the unique 
                                partner able to create elegant environments in line with Clients expectations.
                            </p>
                            <div className="text-center">
                                {linking}  
                            </div>  
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-light">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Stylistic innovation
                            </h3>
                            <p className="initialism">
                                A distinctive, authoritative stylist language brings out Opera Contemporary’s 
                                ability to juxtapose aesthetic solutions for the construction of sophisticated 
                                atmospheres. Through a wide range of finishes and fabrics, the brand offers 
                                infinite possibilities of coordination to create its own “expandable collection”, 
                                ready to meet the needs of high-end interior decoration in striking public and 
                                private spaces. This versatile approach makes it possible to respond to the 
                                requests and expectations of a clientele that is highly diversified in terms 
                                of tastes and aesthetic sensibilities.
                            </p>
                            <div className="text-center">
                                {linking}  
                            </div> 
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-ext-2.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutExt;