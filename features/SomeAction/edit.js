import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Edit extends React.Component {
    onPress(e) {
        console.log('on press');
        console.log(e);
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>HEre are the edit details</Text>
            <Button title="Go Back" onPress={(e) => this.onPress(e)}/>
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