import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Routes from './routes';
import Login from './login';

export const RouteConfig = {
    [Routes.LOGIN]: { screen: Login }
};

export default navigator = createStackNavigator(RouteConfig);
