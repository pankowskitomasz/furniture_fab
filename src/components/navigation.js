import React,{Component} from "react";
import {Link} from "react-router-dom";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Navbar from "../../node_modules/react-bootstrap/Navbar";

class Navigation extends Component{
    render(){
        let menuContent = this.props.menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            return <Nav.Item key={idx}>
                <Link to={item.path} className="nav-link text-light">
                    {item.name}
                </Link>
            </Nav.Item>;
        });
        return(
            <Navbar bg="dark" variant="dark" expand="md" className="position-absolute w-100 border-bottom border-secondary shadow z-100" collapseOnSelect>
                <Navbar.Brand>
                    <Link to="/" className="font-weight-bold font-logo decoration-none text-white">
                        <img src="/img/navbar_logo.png" alt="logo" className="mr-2"/>
                        Furniture FAB
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>                    
                    <Nav className="ml-auto text-right px-3 font-menu">
                        {menuContent}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;