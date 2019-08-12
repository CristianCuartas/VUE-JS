import React from 'react';
import { SketchPicker, ChromePicker } from 'react-color';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    CustomInput} from 'reactstrap';

class CrearPrototipo extends React.Component {
  state = {
    background: '#27415E',
    colorBackground:''
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  handleSetState = () =>{
    this.setState({
        colorBackground: this.state.background
    });
  }

  render() {
    console.log(`colorBackground: ${this.state.colorBackground}`)
    return (
        <div style={{backgroundColor:this.state.colorBackground}}>
      <ChromePicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
      <Button onClick={this.handleSetState}>Actualizar background</Button>
      </div>
    );
  }
}
export default CrearPrototipo;

// import React, {Component, Fragment} from 'react';
// import {
//     Button,
//     Card,
//     CardBody,
//     CardHeader,
//     CardFooter,
//     CustomInput} from 'reactstrap';
// import { ChromePicker, SketchPicker  } from 'react-color';
// class CrearPrototipo extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             cheader:'',
//             cbody:'',
//             cfooter:''
//         }
//     }

//     handleColorChange = color => {
//         console.log(color);
//         this.setState({
//             cheader: color.hex
//         });
//       }; 
//       showState = () =>{
//           console.log(this.state.cheader);
//       }
//     render(){
//         console.log(this.state.cheader)
//         return(
//             <Fragment>
//                 <h1>Diseño</h1>
//                 <div className="card">
//                 <div className="p-2 mb-2 bg-secondary text-dark">
//                   Datos adicionales
//                 </div>
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-md-4">
//                       <Card body>
//                         <h5 className="text-center">
//                           Colores en el header{' '}
//                           <hr style={{ marginTop: '2px' }} />{' '}
//                         </h5>
//                         <p className="text-center">
//                           Este color afectapra los diferentes header de la
//                           aplicacion{' '}
//                         </p>
//                         <ChromePicker 
//                           color={'#333'}
//                           onChange={this.handleColorChangeHeader}                      
//                         />
//                       </Card>
//                     </div>
//                     <div className="col-md-4">
//                       <Card body>
//                         <h5 className="text-center">
//                           {' '}
//                           Colores en el body{' '}
//                           <hr style={{ marginBottom: '5px' }} />{' '}
//                         </h5>
//                         <p className="text-center">
//                           {' '}
//                           Este Color afectara al footer de la aplicacion{' '}
//                         </p>
//                         <ChromePicker
//                           color={'#333'}
//                           onChange={this.handleColorChange}
//                         />
//                       </Card>
//                     </div>
//                     <div className="col-md-4">
//                       <Card body>
//                         <h5 className="text-center">
//                           Colores en el footer{' '}
//                           <hr style={{ marginBottom: '5px' }} />{' '}
//                         </h5>
//                         <p className="text-center">
//                           {' '}
//                           Este color afectara algunas secciones del body
//                         </p>
//                         <ChromePicker
//                           color={'#333'}
//                           onChange={this.handleColorChange}
//                         />
//                       </Card>
//                     </div>
//                   </div>
//                   </div> 
//                 </div>
//                 <Button
//                 onClick={()=>this.showState()}
//                 >
//                 Show
//                 </Button>
//                 <Button
//                 href="#"
//                 >
//                 Volver
//                 </Button>
//             </Fragment>
//         );
//     }   
// }
// export default CrearPrototipo;