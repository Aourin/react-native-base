import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from 'styles/colors';

export default class Card extends React.Component {
    render () {
        <View style={cardStyle}>
            { this.props.children }
        </View>
    }
}

export const cardStyle = new StyleSheet.create({
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.grey
});