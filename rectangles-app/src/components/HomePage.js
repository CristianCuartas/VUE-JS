import React, {Component} from 'react';
import {
    Button, 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink
} from 'reactstrap';
import cubeHome from './../assets/img/cubeHome.jpg';
import rectangleHome from './../assets/img/rectangle.gif';
import './../assets/css/HomePage.css'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            collapsed: false
        }
    }
    toggleNavBar = () => {
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4"
                        style={{backgroundColor:"black"}}
                    >
                    <div className="navBar">
                        <Navbar color="faded" light>
                            <NavbarBrand 
                                style={{"color":"#FFFFFF"}} 
                                href="/" 
                                className="mr-auto"
                            >
                                RECTANGLES
                            </NavbarBrand>
                            <NavbarToggler 
                                onClick={this.toggleNavBar} 
                                className="bg-light"
                            />
                            <Collapse 
                                isOpen={!this.state.collapsed}
                                navbar
                            >
                            <Nav navbar>
                            <NavItem>
                                <NavLink 
                                    style={{"color":"#FFFFFF"}} 
                                    href="/"
                                    >
                                        Sub Menu 1
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                    style={{"color":"#FFFFFF"}} 
                                    href="/"
                                    >
                                        Sub Menu 2
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                    style={{"color":"#FFFFFF"}} 
                                    href="/"
                                    >
                                    <i class="fa fa-facebook"></i>Sub Menu 3
                                </NavLink>
                            </NavItem>
                            </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                <br/>
                <img src={cubeHome} height="567"/>
                </div>
                <div 
                    className="col-sm-8" 
                    style={{"background-color":"lavenderblush"}}
                >
                    INFORMACIÓN
                </div>
                </div>
            </div>
        );
    }
}
export default HomePage;