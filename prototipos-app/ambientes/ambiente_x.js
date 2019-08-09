    
import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class Ambiente_x extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('360_tunel.jpg')}/>
        <VrButton onClick={()=>{
          this.props.history.goBack()
        }}>
        <Text
          style={{
            backgroundColor: 'red',
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          liucheng: second page
        </Text>
        </VrButton>
      </View>
    );
  }
};

// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   VrButton
// } from 'react-360';
// export default class ambiente_x extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//           count:0
//         }
//       }
//     incrementCount=()=>{
//         this.setState({count: this.state.count+1});
//       }
//       componentDidMount() {
//         setInterval(this.incrementCount, 1000);
//       }
//     render(){
//         return(
//             <View style={styles.panel}>
//             <VrButton
//               onClick={this.incrementCount}
//               style={styles.greetingBox}
//               >
//               <Text style={styles.greeting}>
//               Prototipos rectangles {`Contador de click's: ${timeRun}`}
//             </Text>
//               </VrButton>
              
//           </View>
//         );
//     }
// };

// const styles = StyleSheet.create({
//     panel: {
//       // Fill the entire surface
//       width: 1000,
//       height: 600,
//       backgroundColor: 'rgba(255, 255, 255, 0.4)',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     greetingBox: {
//       padding: 20,
//       backgroundColor: '#000000',
//       borderColor: '#639dda',
//       borderWidth: 2,
//     },
//     greeting: {
//       fontSize: 30,
//     },
//   });
  
//   AppRegistry.registerComponent('prototipos_app', () => prototipos_app);