import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,

} from 'react-360';
export default class prototipos_app extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  incrementCount=()=>{
    this.setState({count: this.state.count+1});
  }
  // componentDidMount() {
  //   setInterval(this.incrementCount, 1000);
  // }
  
  render() {
    const timeRun = this.state.count
    return (
    <View style={styles.panel}>
    <VrButton
      onClick={this.incrementCount}
      style={styles.greetingBox}
      >
      <Text style={styles.greeting}>
      Prototipos rectangles {`Contador de click's: ${timeRun}`}
    </Text>
      </VrButton>
  </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('prototipos_app', () => prototipos_app);
