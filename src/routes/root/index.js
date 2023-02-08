import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Welcome, Signup, Login} from '../../screens/auth';
import Profile from '../../screens/profile';

const Stack = createStackNavigator();

const {Navigator, Screen} = Stack;

const ScreenOptions = {headerShown: false, gestureEnabled: false};

const RootRouter = () => {
  return (
    <NavigationContainer>
        <Navigator screenOptions={ScreenOptions} initialRouteName={"welcome-screen"}>
            <Screen name='welcome-screen' component={Welcome} />
            <Screen name='login-screen' component={Login} />
            <Screen name='signup-screen' component={Signup} />
            <Screen name='profile-screen' component={Profile} />
        </Navigator>
    </NavigationContainer>
  )
};

export default RootRouter;