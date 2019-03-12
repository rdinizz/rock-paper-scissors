import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const rock = require('../../../assets/imgs/rock.png');
const paper = require('../../../assets/imgs/paper.png');
const scissors = require('../../../assets/imgs/scissors.png');

class PlayOption extends Component {
  render() {
    switch (this.props.type) {
      case 'rock':
        return (
          <View>
            <Image source={rock} style={styles.image} />
          </View>
        );
      case 'paper':
        return (
          <View>
            <Image source={paper} style={styles.image} />
          </View>
        );
      case 'scissors':
        return (
          <View>
            <Image source={scissors} style={styles.image} />
          </View>
        );
      default:
          return (<View />);
    }
  }
}

export default PlayOption;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    resizeMode: 'stretch'
  }
});
