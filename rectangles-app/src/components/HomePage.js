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
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    CardSubtitle,
    CardImg,
    Row, 
    Col
} from 'reactstrap';
import { animateScroll as scroll } from 'react-scroll';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import facebook from './../assets/img/facebook.svg';
import instagram from './../assets/img/instagram.svg';
import cubeMail from './../assets/img/cubo.svg';
import rectangleHome from './../assets/img/rectangle.gif';
import './../assets/css/HomePage.css';
import {Link} from "react-router-dom";

const items = [
    {
      id: 1,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      id: 2,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      id: 3,
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            collapsed: false,
            activeIndex: 0
        }
    }
    toggleNavBar = () => {
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    onClickMoreDownPrototipos = () => {
        scroll.scrollMore(351);
      }
      onClickMoreDownZonas = () => {
        scroll.scrollMore(1000);
      }
      onClickMoreDownInstalcion = () => {
        scroll.scrollMore(1670);
      }
      onClickMoreDownTransporte = () => {
        scroll.scrollToBottom();
      }
      onExiting = () => {
        this.animating = true;
      }
    
      onExited =() => {
        this.animating = false;
      }
    
      next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
    render(){
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
          return (
            <CarouselItem
              className="custom-tag"
              tag="div"
              key={item.id}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
              <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
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
                                style={{"color":"#FFFFFF", fontSize: "35px"}} 
                                href="/" 
                                className="mr-auto"
                            >
                                R E C T A N G L E S
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
                                    style={{"color":"#FFFFFF", fontSize: "25px"}} 
                                    onClick={this.onClickMoreDownPrototipos}
                                    >
                                        Prototipos
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button 
                                    className="btn btn-down"
                                    color="link"
                                    style={{"color":"#FFFFFF", fontSize: "25px"}} 
                                    onClick={this.onClickMoreDownZonas}
                                    >
                                        Zonas de vivienda
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button 
                                    className="btn btn-down" 
                                    color="link"
                                    style={{"color":"#FFFFFF", fontSize: "25px"}} 
                                    onClick={this.onClickMoreDownInstalcion}
                                    >
                                        Instalación
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    className="btn btn-down" 
                                    color="link"
                                    style={{"color":"#FFFFFF", fontSize: "25px"}} 
                                    onClick={this.onClickMoreDownTransporte}
                                    >
                                       Transporte
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
                    className="container"
                    style={{marginTop:"80px"}}
                >
                <h1 className="text-center title-prototipos">
                Estos son nuestros prototipos</h1>
                <br/>
                <div className="row" style={{backgroundColor:"#F6F7C2"}}>
                
                    <div className="col-md-4"
                    >
                    
                    <Card outline color="warning">
                    <CardHeader className="text-center bg-white text-dark">
                    Contenido Z
                    </CardHeader>
                    <CardBody>
                    <CardTitle><img className="rectangleGif" src={rectangleHome} /></CardTitle>
                    <CardText>
                    With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button 
                        href="http://localhost:8081/index.html" 
                        target={"_blank"}
                        outline 
                        color="warning" 
                        style={{
                            display: "block",
                            margin: "auto",
                        }}
                        >
                        Ver prototipo Z
                    </Button>
                    </CardBody>
                    <CardFooter className="text-center bg-white text-dark">
                        <i className="fa fa-tree"></i>
                        
                        
                    </CardFooter>
                </Card>
                </div>
                <div className="col-md-4"
                    >
                    <Card outline color="warning">
                    <CardHeader className="text-center bg-white text-dark">
                    Contenido Y</CardHeader>
                    <CardBody>
                    <CardTitle><img className="rectangleGif" src={rectangleHome} /></CardTitle>
                    <CardText>
                    With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button 
                        href="http://localhost:8081/index.html" 
                        target={"_blank"}
                        outline 
                        color="warning" 
                        style={{
                            display: "block",
                            margin: "auto",
                        }}    
                    >
                        Ver prototipo Y 
                        </Button>
                    </CardBody>
                    <CardFooter className="text-center bg-white text-dark">
                    <i class="fa fa-laptop"></i>

                    </CardFooter>
                </Card>
                </div>
                <div className="col-md-4"
                >
                    <Card outline color="warning">
                    <CardHeader className="text-center bg-white text-dark">
                    Contenido X</CardHeader>
                    <CardBody>
                    <CardTitle><img className="rectangleGif" src={rectangleHome}/></CardTitle>
                    <CardText>
                    With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button 
                        href="http://localhost:8081/index.html" 
                        target={"_blank"}
                        outline 
                        color="warning" 
                        style={{
                            display: "block",
                            margin: "auto",
                        }}
                    >
                    Ver prototipo X
                    </Button>
                    </CardBody>
                    <CardFooter className="text-center bg-white text-dark">
                    <i className="fa fa-tint"></i>
                    </CardFooter>
                </Card>
                </div>
                <br/>
                </div>
                </div>
                <div className="container" style={{marginTop:"100px"}}>
                <div className="row">
                <div className="col-md-12">
                <h1 className="text-center title-map">Localiza tú zona de vivienda</h1>
                <br/>
                <div className="mapa">
                <Map 
                    google={this.props.google} 
                    zoom={10}
                    initialCenter={{
                        lat: 4.6097100,
                        lng: -74.0817500
                    }}
                >
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                </Map>
                </div>
                </div>
                    </div>
                </div>
                <div className="container" style={{marginTop:"150px"}}>
                <div className="row">
                <div className="col-md-12">
                <h1 className="text-center title-instalacion">
                No te preocupes nosotros lo instalamos</h1>
                <br/>
                
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                    >
                    <CarouselIndicators 
                        items={items} 
                        activeIndex={activeIndex} 
                        onClickHandler={this.goToIndex} 
                        />
                    {slides}
                    <CarouselControl 
                        direction="prev" 
                        directionText="Previous" 
                        onClickHandler={this.previous} 
                        />
                    <CarouselControl 
                        direction="next" 
                        directionText="Next" 
                        onClickHandler={this.next} 
                        />
                    </Carousel>
                </div>
                    </div>
                </div>
                <div className="container" style={{marginTop:"100px", marginBottom:"500px"}}>
                <div className="row">
                <div className="col-md-12">
                <h1 className="text-center title-transporte">
                ¿Transporte? Lo resolvemos </h1>
                <br/>
                <center>
                <img className="canalesComunicacion" src={facebook} />
                &nbsp;
                <img className="canalesComunicacion" src={instagram} />
                &nbsp;
                <img className="canalesComunicacion" src={cubeMail} />
                </center>
                </div>
                    </div>
                </div>
                </Fragment>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAuOMCNsR9Pm4O3z9bEeDGC7FaQ_H921oQ")
  })(HomePage)