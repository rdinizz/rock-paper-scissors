import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { 
  getLeaderboard, 
  subscribeLeaderboard, 
  unSubscribeLeaderboard 
} from '../../redux/actions/leaderboard/leaderboardActions';
import PlayerScore from '../../components/leaderboard/playerScore';

class LeaderboardContainer extends Component {
  static navigationOptions = { header: null };

  componentWillMount() {
    this.props.subscribeLeaderboard();
  }

  componentWillUnmount() {
    this.props.unSubscribeLeaderboard();
  }

  renderPlayerScore(score) {
    return (
      <PlayerScore player={score.item.user} trophies={score.item.trophies} />
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
          <Text style={styles.title}>Leaderboard</Text>
        </View>
        <View style={{ height: 2, backgroundColor: '#00002b' }} />
        <View style={styles.leaderboard}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.leaderboardPlayer}>
              <Text style={styles.robotoText}>Player</Text>
            </View>
            <View style={styles.leaderboardTrophies}>
              <Text style={styles.robotoText}>Trophies</Text>
            </View>
          </View>
          <FlatList 
            enableEmptySections
            data={this.props.leaderboardList}
            keyExtractor={(item) => item.user}
            renderItem={(rowData) => this.renderPlayerScore(rowData)}
            bounces={false}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    leaderboardList: state.leaderboardReducer.leaderboardList
  }
);
  
export default connect(mapStateToProps, 
{ getLeaderboard, subscribeLeaderboard, unSubscribeLeaderboard })(LeaderboardContainer);

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
  leaderboard: {
    flex: 0.9,
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    color: '#282c54', 
    fontFamily: 'Roboto',
    fontSize: 28,
    marginTop: 30,
  },
  robotoText: {
    color: '#282c54', 
    fontFamily: 'Roboto',
    fontSize: 20,
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
