import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Routes from './routes';

export default class Details extends React.Component {
    onPress(e) {
        console.log("MOOOOO");
        const { navigate } = this.props.navigation;
        navigate(RouteNames.EDIT);
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>HEre are the details</Text>
            <Button title="Edit" onPress={(e) => this.onPress(e)}/>
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
});