import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

//  Import Features
import SomeAction from 'features/SomeAction';
import SignIn from 'features/SignIn';
import AuthLoadingState from 'features/AuthLoading';


const navConfig = {
  AuthLoading: AuthLoadingState,
  App: SomeAction,
  Auth: SignIn
};
//  Handle Application Navigation
const AppSwitchNav = createSwitchNavigator(
  navConfig,
  {
    initialRouteName: 'Auth'
  } 
);

export default AppSwitchNav;
