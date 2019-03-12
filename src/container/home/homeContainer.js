import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth/authActions';
import { getTrophies } from '../../redux/actions/play/playActions';

class HomeContainer extends Component {
  static navigationOptions = { header: null };
  
  componentWillMount() {
    this.props.getTrophies();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient 
          start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} 
          colors={['#7780b1', '#1c2c54']} 
          style={styles.mainView}
        >
          <View style={styles.viewHiAndLogout} >
            <Text style={styles.hiText}>Hi, {this.props.currentUser}</Text>
            <TouchableOpacity
              onPress={() => this.props.logout(this.props.navigation)}
            >
              <MaterialCommunityIcon name='logout' size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.viewTrophies}>
            <Text style={styles.hiText}>Trophies: {this.props.playerTrophies}</Text>
          </View>
          <View style={styles.viewBotaoLeaderBoard}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('LeaderboardContainer')}
            >
                <LinearGradient 
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                    colors={['#495481', '#7780b1']} 
                    style={styles.button}
                >
                    <Text style={styles.whiteTextRoboto}> Leaderboard </Text>
                </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBotaoPlay}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('PlayContainer')}
            >
                <LinearGradient 
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                    colors={['#495481', '#7780b1']} 
                    style={styles.button}
                >
                    <Text style={styles.whiteTextRoboto}> Play vs Computer </Text>
                </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    currentUser: state.authReducer.currentUser,
    playerTrophies: state.playReducer.playerTrophies
  }
);
  
export default connect(mapStateToProps, 
{ logout, getTrophies })(HomeContainer);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewHiAndLogout: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hiText: {
    color: '#00002b', 
    fontFamily: 'Roboto',
    fontSize: 18
  },
  viewBotaoPlay: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30
  },
  viewBotaoLeaderBoard: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 120
  },
  viewTrophies: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 60
  },
  button: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10
  },
  whiteTextRoboto: {
    color: 'white', 
    fontFamily: 'Roboto-Medium',
    fontSize: 18
  }
});
