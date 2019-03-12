import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import SignIn from '../../components/auth/signIn';
import SignUp from '../../components/auth/signUp';

const window = Dimensions.get('window');

class AuthContainer extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = { activeTab: 'signIn' };
  }

  changeTabToSignUp() {
    this.setState({ activeTab: 'signUp' });
  }

  changeTabToSignIn() {
    this.setState({ activeTab: 'signIn' });
  }

  renderTab() {
    if (this.state.activeTab === 'signIn') {
      return (
        <SignIn navigation={this.props.navigation} />
      );
    }
    return (
      <SignUp />
    );
  }

  renderTabs() {
    return (
      <View style={styles.viewSignInSignUp} >
        <TouchableOpacity
          style={this.state.activeTab === 'signIn' ? styles.signButtonSelected : styles.signButton}
          onPress={() => this.changeTabToSignIn()}
        >
          <Text style={styles.signText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.state.activeTab === 'signUp' ? styles.signButtonSelected : styles.signButton}
          onPress={() => this.changeTabToSignUp()}
        >
          <Text style={styles.signText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
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
            <Image source={require('../../../assets/imgs/rps-logo.png')} style={styles.logo} />
          </View>
          <View style={styles.authView} >
            {this.renderTabs()}
            {this.renderTab()}
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
{ })(AuthContainer);

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
  authView: {
    marginTop: '10%',
    height: window.height * 0.45,
    width: window.width * 0.8,
    borderRadius: 10,
    backgroundColor: '#677091',
    
  },
  viewSignInSignUp: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
  },
  signButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signButtonSelected: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
  signText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: '#00002b',
    
  }
});
