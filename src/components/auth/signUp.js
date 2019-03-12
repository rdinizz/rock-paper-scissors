import React, { Component } from 'react';
import { View, Text, TextInput, 
    StyleSheet, TouchableOpacity, ActivityIndicator 
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { updateEmailField, updatePasswordField, signUp 
} from '../../redux/actions/auth/signUpActions';


class SignUp extends Component {
    showErrorOrSuccessfulMessage() {
        if (this.props.hasError) {
            return (
                <Text style={styles.error}>{this.props.error}</Text>
            );
        }
        if (this.props.showSuccessfulMessage) {
            return (
                <Text style={styles.newAccount}>
                    Your account has been created successfully! You can now sign in.
                </Text>
            );
        }
    }

    async signUp() {
        await this.props.signUp(this.props.email, this.props.password);
    }

    renderSignUpButton() {
        if (this.props.signingUp) {
            return (
                <ActivityIndicator size="large" style={{ marginTop: 10 }} />
            );
        }
        return (
            <TouchableOpacity
                onPress={() => this.signUp()}
            >
                <LinearGradient 
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                    colors={['#495481', '#1c2c54']} 
                    style={styles.button}
                >
                    <Text style={styles.whiteTextRoboto}> SIGN UP </Text>
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
                    {this.renderSignUpButton()}
                    {this.showErrorOrSuccessfulMessage()}
                </View> 
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.signUpReducer.signUpEmail,
        password: state.signUpReducer.signUpPassword,
        signingUp: state.signUpReducer.signingUp,
        hasError: state.signUpReducer.hasError,
        error: state.signUpReducer.error,
        showSuccessfulMessage: state.signUpReducer.showSuccessfulMessage
    }

);

export default connect(mapStateToProps, 
{ updateEmailField, updatePasswordField, signUp })(SignUp);

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
    },
    newAccount: {
        color: '#00002b', 
        fontFamily: 'Roboto',
        marginTop: 10,
        fontSize: 12
    }
});
