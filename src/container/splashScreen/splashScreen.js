import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { authCheck } from '../../redux/actions/auth/authActions';

const window = Dimensions.get('window');
const logo = require('../../../assets/imgs/rps-logo.png');

class SplashScreen extends Component {
  static navigationOptions = { header: null };

  async componentDidMount() {
    await setTimeout(() => { this.wait(); }, 3000);
  }

  wait() {
    this.props.authCheck(this.props.navigation);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient 
          start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} 
          colors={['#7780b1', '#1c2c54']} 
          style={styles.mainView}
        >
          <View style={styles.viewLogo} >
            <Image source={logo} style={styles.logo} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    
  }
);
  
export default connect(mapStateToProps, 
{ authCheck })(SplashScreen);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLogo: {
    height: window.height * 0.15,
    width: window.width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
});
