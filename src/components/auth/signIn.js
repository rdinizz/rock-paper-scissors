import React, { Component } from 'react';
import { View, Text, TextInput, 
    TouchableOpacity, StyleSheet, ActivityIndicator 
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { updateEmailField, updatePasswordField, signIn 
} from '../../redux/actions/auth/signInActions';

class SignIn extends Component {
    showError() {
        if (this.props.hasError) {
            return (
                <Text style={styles.error}>{this.props.error}</Text>
            );
        }
    }

    renderSignInButton() {
        if (this.props.signingIn) {
            return (
                <ActivityIndicator size="large" style={{ marginTop: 10 }} />
            );
        }
        return (
            <TouchableOpacity
                onPress={() => this.props.signIn(this.props.email, this.props.password, this.props.navigation)}
            >
                <LinearGradient 
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                    colors={['#495481', '#1c2c54']} 
                    style={styles.button}
                >
                    <Text style={styles.whiteTextRoboto} > SIGN IN </Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.scene}>
                <View style={{ padding: 20 }} >
                    <Text style={styles.inputData} >EMAIL</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={email => this.props.updateEmailField(email)}
                        value={this.props.email}
                        autoCapitalize='none'
                    />
                    <Text style={[styles.inputData, { marginTop: 20 }]} >PASSWORD</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={password => this.props.updatePasswordField(password)}
                        value={this.props.password}
                        secureTextEntry
                    />
                    {this.renderSignInButton()}
                    {this.showError()}
                    <TouchableOpacity
                        style={styles.forgotPassword}
                        onPress={() => {}}
                    >
                        <Text style={styles.forgotPasswordText} > Forgot password? </Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.signInReducer.signInEmail,
        password: state.signInReducer.signInPassword,
        signingIn: state.signInReducer.signingIn,
        hasError: state.signInReducer.hasError,
        error: state.signInReducer.error
    }
);

export default connect(mapStateToProps, 
{ updateEmailField, updatePasswordField, signIn })(SignIn);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        padding: 20, 
    },
    button: {
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 10
    },
    textInput: { 
        height: 30, 
        borderBottomWidth: 2, 
        borderBottomColor: '#00002b',
        color: '#00002b',
        fontFamily: 'Roboto'
    },
    inputData: {
        fontFamily: 'Roboto', 
        fontStyle: 'italic', 
        fontSize: 15, 
        color: '#00002b'
    },
    forgotPassword: {
        alignItems: 'center',
        marginTop: 15
    },
    whiteTextRoboto: {
        color: 'white', 
        fontFamily: 'Roboto'
    },
    forgotPasswordText: {
        color: '#00002b', 
        fontFamily: 'Roboto'
    },
    error: {
        color: '#ff6e7c', 
        fontFamily: 'Roboto',
        marginTop: 10,
        fontSize: 12
    }
});
