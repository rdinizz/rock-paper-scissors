import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import PlayOption from '../../components/game/playOption';
import { play, playAgain } from '../../redux/actions/play/playActions';

class PlayContainer extends Component {
  static navigationOptions = { header: null };

  resultText() {
    if (this.props.winner === 'player') {
      return 'You Win!';
    } else if (this.props.winner === 'computer') {
      return 'You Lose! Try again.';
    }
    return 'Draw!';
  }

  renderResults() {
    if (this.props.showResults) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.resultsText}>Computer</Text>
          <PlayOption type={this.props.computerChoice} />
          <Text style={styles.resultsText}>{this.resultText()}</Text>
          <PlayOption type={this.props.playerChoice} />
          <Text style={styles.resultsText}>You</Text>
        </View>
      );
    } 
    return (
      <Text style={styles.resultsText}>Waiting for your choice</Text>
    );
  }

  renderOptions() {
    if (this.props.showResults) {
      return (
        <TouchableOpacity
          style={styles.playOption}
          onPress={() => this.props.playAgain()}
        >
          <Text style={styles.optionText}>Play Again</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.chooseOptionText}>Choose your option:</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.playOption}
            onPress={() => this.props.play('rock')}
          >
            <Text style={styles.optionText}>Rock</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playOption}
            onPress={() => this.props.play('paper')}
          >
            <Text style={styles.optionText}>Paper</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playOption}
            onPress={() => this.props.play('scissors')}
          >
            <Text style={styles.optionText}>Scissors</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.viewHeader}>
          <View style={styles.viewBackButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
            >
              <Ionicon name='md-arrow-round-back' size={30} />
            </TouchableOpacity>
          </View>
          <Text style={styles.trophiesText}>Trophies: {this.props.playerTrophies}</Text>
        </View>
        <View style={{ height: 2, backgroundColor: '#00002b' }} />
        <View style={styles.viewResults}>
          {this.renderResults()}
        </View>
        <View style={{ height: 2, backgroundColor: '#00002b' }} />
        <View style={styles.viewOptionsResult}>
          {this.renderOptions()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    showResults: state.playReducer.showResults,
    playerChoice: state.playReducer.playerChoice,
    computerChoice: state.playReducer.computerChoice,
    winner: state.playReducer.winner,
    playerTrophies: state.playReducer.playerTrophies
  }
);
  
export default connect(mapStateToProps, 
{ play, playAgain })(PlayContainer);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#495481'
  },
  viewBackButton: {
    position: 'absolute',
    top: 40,
    left: 5
  },
  viewHeader: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewResults: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewOptionsResult: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playOption: {
    backgroundColor: '#d9e1ff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionText: {
    color: '#282c54', 
    fontFamily: 'Roboto',
    fontSize: 18
  },
  trophiesText: {
    color: '#282c54', 
    fontFamily: 'Roboto',
    fontSize: 22,
    marginTop: 20
  },
  chooseOptionText: {
    color: '#282c54', 
    fontFamily: 'Roboto',
    fontSize: 24
  },
  resultsText: {
    color: '#282c54', 
    fontFamily: 'Roboto',
    fontSize: 28,
    marginVertical: 10,
  }
});
