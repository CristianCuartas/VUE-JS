
import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class Ambiente_y extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('360_ascendor.jpg')}/>
        <VrButton onClick={()=>{
          this.props.history.push('./ambiente_x')
        }}>
          <Text
            style={{
              backgroundColor: 'blue',
              fontSize: 0.4,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}],
            }}>
            liucheng: first page
          </Text>
        </VrButton>
      </View>
    );
  }
};