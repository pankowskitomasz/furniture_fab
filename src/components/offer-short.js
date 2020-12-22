import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class OfferShort extends Component{
    render(){
        let linking=["",""];
        if(this.props.backLink!==undefined){
            for(var i=0;i<this.props.backLink.length;i++){
                linking[i] = <Link to={this.props.backLink[i].path}>
                    <Button variant="outline-dark" className="rounded-pill">
                        {this.props.backLink[i].name}
                    </Button>
                </Link>;
            }
        }
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Premium collection
                            </h3>
                            <p className="initialism">
                                From the first approaches to the international creativeness, passing through 
                                the marketing of pieces of high quality, our premium line gave life 
                                during the years to different collections, heterogeneous, but that cohabit 
                                with great harmony and facility under the same brand. The products of this 
                                luxury furniture brand are never boring neither absurd, but always possess 
                                something of alive and light, often full of healthy humour, other times 
                                proposing brave and dynamics formal solutions.
                            </p>  
                            <div className="text-center">
                                {linking[0]}  
                            </div>                        
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-short-1.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-white">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-short-2.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Optimum collection
                            </h3>
                            <p className="initialism">
                                The genuine vocation for the crafting of items in wood – in keeping with the 
                                tradition and the values of “made by hand”- creates a dialogue with constant 
                                research on styling, materials and fabrics, giving rise to a unique, elegant 
                                approach capable of offering distinctive solutions that narrate a captivating 
                                story. While conserving its reliance on fine craftsmanship, the company 
                                continues to evolve, also thanks to machinery of the latest generation combined 
                                with the experience and technical know-how of master craftsmen, making processes 
                                more efficient and giving the collections an elegant, vivid identity.
                            </p>
                            <div className="text-center">
                                {linking[1]}  
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default OfferShort;