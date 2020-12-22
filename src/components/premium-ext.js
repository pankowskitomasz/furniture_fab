import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class PremiumExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-white">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/premium-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Premium Quality
                            </h3>
                            <p className="initialism">
                                Each piece of our furniture is handcrafted — and once we’ve finished, we sand 
                                and stain the piece ourselves to give it a smooth, elegant look that will 
                                last for many years to come.
                            </p>
                            <p className="initialism">
                                We also know there’s no “one size fits all” option when it comes to buying 
                                furniture for your home. That’s why we offer options for customizing to make 
                                sure we can deliver to you not only high-quality Amish furniture, but 
                                furniture that caters specifically to your needs as well
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-light">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Premium Style
                            </h3>
                            <p className="initialism">
                                When selecting the materials, we attach great importance to high quality: 
                                Many of our furniture is made of solid wood, which guarantees maximum 
                                stability and a long service life. But all other materials we use also 
                                meet high quality standards so that you and your guests can enjoy them 
                                for a long time. The materials used in our furniture are subjected to 
                                rigorous testing in order to meet the tough requirements of the catering 
                                industry. In the test laboratory, they are tested for various situations 
                                in catering everyday - only furniture that passes these tests is finally 
                                included in our range.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/premium-ext-2.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default PremiumExt;