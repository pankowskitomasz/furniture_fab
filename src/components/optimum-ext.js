import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class OptimumExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-white">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/optimum-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Optimal Quality
                            </h3>
                            <p className="initialism">
                                How do you know whether you’re buying high-quality furniture? If a piece of 
                                furniture is low quality, you can usually tell by how long it lasts before 
                                breaking. Some low-quality furniture can last you 10 to 20 years, while others 
                                may not even last five.
                            </p>
                            <p className="initialism">
                                The challenge is developing the ability to identify the difference between 
                                reliable and unreliable items before you get them home. It would be a shame 
                                to buy a pretty dining room table from the store only to find cracks in it 
                                a year or two later.
                            </p>
                            <p className="initialism">
                                So, that begs the question, what does quality furniture mean? You can easily 
                                determine if a piece of furniture is worth your time and effort, provided you 
                                know what to look for.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-light">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Optimal Style
                            </h3>
                            <p className="initialism">
                                One of the first questions you should ask yourself when you consider buying a 
                                piece of furniture is whether or not it’s easy to use. What’s the point of 
                                having a beautiful household amenity if you struggle to use it? Many people 
                                value accessibility, user-friendliness and convenience — this is just as 
                                important as good strength and durability. If you find a piece of furniture 
                                that strikes a balance between the two, you’ll be better off.
                            </p>
                            <p className="initialism">
                                When it comes to wood furniture, there are some obvious red flags that can 
                                indicate low quality. If the piece of furniture has a smooth finish and looks 
                                clean, you have a better chance of bringing home a high-quality item. However, 
                                you should try to avoid wood pieces with excessive knots or furniture joints 
                                that have screws or staples in them — these can indicate a far lower life span.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/optimum-ext-2.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default OptimumExt;