import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screeens/Home';
import ProfileScreen from '../screeens/Profile';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen component={ProfileScreen} name="Profile" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
