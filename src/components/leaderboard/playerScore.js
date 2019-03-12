import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class PlayerScore extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.leaderboardPlayer}>
          <Text style={styles.robotoText}>{this.props.player}</Text>
        </View>
        <View style={styles.leaderboardTrophies}>
          <Text style={styles.robotoText}>{this.props.trophies}</Text>
        </View>
      </View>
    );
  }
}

export default PlayerScore;

const styles = StyleSheet.create({
  robotoText: {
    color: '#282c54', 
    fontFamily: 'Roboto',
    fontSize: 18,
  },
  leaderboardTrophies: {
    borderWidth: 2,
    borderColor: '#00002b',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaderboardPlayer: {
    borderWidth: 2,
    borderColor: '#00002b',
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
