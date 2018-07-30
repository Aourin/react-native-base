import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { RouteNames } from './routes';

export default class Login extends React.Component {
    state = {}; 

    onPress(e) {
        console.log("MOOOOO");
        const { navigate } = this.props.navigation;
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>Please Login</Text>
            <Text>Username</Text>
            <TextInput  
                style={styles.input}
                onChangeText={(text) => this.setState({text})}
                value={this.state.username}/>
            <Text>Password</Text>
            <TextInput style={styles.input}
                onChangeText={(text) => this.setState({text})}
                value={this.state.password} />
            <Button title="Sign In" onPress={(e) => this.onPress(e)}/>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1
    }
});