import React, {Component, Fragment} from 'react';
import {
    Button, 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    Card,  
    CardTitle, 
    CardText,
    CardHeader,
    CardBody,
    CardFooter, 
    Row, 
    Col
} from 'reactstrap';
import { animateScroll as scroll } from 'react-scroll';
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
    onClickMoreDown = () => {
        scroll.scrollMore(830);
      }

    render(){
        return(
            <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm"
                        style={{backgroundColor:"black"}}
                    >
                    <div className="navBar">
                        <Navbar color="faded" dark>
                            <NavbarBrand 
                                style={{"color":"#FFFFFF"}} 
                                href="/" 
                                className="mr-auto"
                            >
                                RECTANGLES
                            </NavbarBrand>
                            <NavbarToggler 
                                onClick={this.toggleNavBar} 
                                className=""
                            />
                            <Collapse 
                                isOpen={!this.state.collapsed}
                                navbar
                            >
                            <Nav navbar>
                            <NavItem>
                                <Button
                                    className="btn btn-down" 
                                    color="link"
                                    style={{"color":"#FFFFFF"}} 
                                    onClick={this.onClickMoreDown}
                                    >
                                        Sub Menu 1
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button 
                                    className="btn btn-down" 
                                    color="link"
                                    style={{"color":"#FFFFFF"}} 
                                    onClick={this.onClickMoreDown}
                                    >
                                        Sub Menu 2
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button 
                                    className="btn btn-down" 
                                    color="link"
                                    style={{"color":"#FFFFFF"}} 
                                    onClick={this.onClickMoreDown}
                                    >
                                        Sub Menu 3 
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button 
                                    className="btn btn-down" 
                                    color="link"
                                    style={{"color":"#FFFFFF"}} 
                                    onClick={this.onClickMoreDown}
                                    >
                                       Canales de comunicación
                                       <br/>
                                       <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                       &nbsp;
                                       <i className="fa fa-instagram" aria-hidden="true"></i>
                                       &nbsp;
                                       <i className="fa fa-cubes" aria-hidden="true"></i>
                                </Button>
                            </NavItem>
                            </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                    <div className="cubeHomeImg"/>
                </div>
                </div>
                </div>
                <div 
                    className="container-fluid"
                >
                <div className="row" style={{backgroundColor:"#F6F7C2"}}>
                    <div className="col-sm-4"
                    >
                    <Card>
                    <CardHeader className="text-center">Contenido Z</CardHeader>
                    <CardBody>
                    <CardTitle><img className="rectangleGif" src={rectangleHome} /></CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button outline color="warning" style={{marginLeft:"100px"}}>Go somewhere</Button>
                    </CardBody>
                    <CardFooter className="text-center">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    &nbsp;
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    &nbsp;
                    <i className="fa fa-cubes" aria-hidden="true"></i>
                    </CardFooter>
                </Card>
                </div>
                <div className="col-sm-4"
                    >
                    <Card>
                    <CardHeader className="text-center">Contenido Y</CardHeader>
                    <CardBody>
                    <CardTitle><img className="rectangleGif" src={rectangleHome} /></CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button outline color="warning" style={{marginLeft:"100px"}}>Go somewhere</Button>

                    </CardBody>
                    <CardFooter className="text-center">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    &nbsp;
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    &nbsp;
                    <i className="fa fa-cubes" aria-hidden="true"></i>
                    </CardFooter>
                </Card>
                </div>
                <div className="col-sm-4"
                >
                    <Card>
                    <CardHeader className="text-center">Contenido X</CardHeader>
                    <CardBody>
                    <CardTitle><img className="rectangleGif" src={rectangleHome} /></CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button outline color="warning" style={{marginLeft:"100px"}}>Go somewhere</Button>

                    </CardBody>
                    <CardFooter className="text-center">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    &nbsp;
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    &nbsp;
                    <i className="fa fa-cubes" aria-hidden="true"></i>
                    </CardFooter>
                </Card>
                </div>
                <br/>
                </div>
                </div>
                </Fragment>
        );
    }
}
export default HomePage;