import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutShort extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"about-short bg-light p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={10} md={8} className="mx-auto text-dark p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Who we are
                            </h3>
                            <p className="initialism">
                                Furniture FAB is a company with a tradition of more than one hundred years 
                                and an international flavor, rooted in the city of Meda, in the center of 
                                Brianza.
                            </p>
                            <p className="initialism">
                                Our collections arise from the craft tradition and the industriousness 
                                of territory: unique furniture, the high quality of workmanship and the 
                                selection of materials. The elements of furniture that range from the 
                                purely classical style to the modern style, enhanced with the latest 
                                collections.
                            </p>
                            <p className="initialism">
                                The true leitmotif of collection is wood, the expensive element of the 
                                company, was formed and worked in innovative ways without ever departing 
                                from the fine traditional cabinetmaker. The wood has been enhanced by the 
                                inserts in other materials over the years: leather, metal, glass and textile, 
                                which are natural and precious, in many textures and colors.
                            </p>
                            <div className="text-center">
                                {linking}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutShort;