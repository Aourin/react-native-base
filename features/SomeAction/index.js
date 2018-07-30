import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Edit from './edit';
import Details from './details';
import Routes from './routes';

export const RouteConfig = {
    [RouteNames.DETAILS]: { screen: Details },
    [RouteNames.EDIT]: { screen: Edit }
};

export default navigator = createStackNavigator(RouteConfig);
