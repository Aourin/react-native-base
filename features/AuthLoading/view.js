import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from 'styles/colors';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  
  _bootstrapAsync = async () => {
    console.log('Check User Token');
    const userToken = await AsyncStorage.getItem('userToken');
    const { navigate } = this.props.navigation;
     
    if (userToken) {
      console.log('userTOken found', userToken);
      navigate('App')
    } else {
      console.log('no token');
      navigate('SignIn')
      console.log('should go navigate');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text style={styles.message}>Loading</Text>
        <StatusBar barStyle="default" />
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
    flexDirection: 'column'
  },
  message: {
    flex: 1,
    color: Colors.Primary,
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


