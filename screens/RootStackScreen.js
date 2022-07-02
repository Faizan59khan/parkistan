import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './.././pages/login/index';
import UserSignUpScreen from './../pages/signup/UserForm';
import OwnerSignUpScreen from './../pages/signup/OwnerForm'
const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator 
    screenOptions={{
      headerShown: false
    }}>
      {/* <RootStack.Screen name='SplashScreen' component={SplashScreen}/> */}
      <RootStack.Screen  name='LoginScreen' component={LoginScreen}/>
      <RootStack.Screen name='UserSignUpScreen' component={UserSignUpScreen}/>
      <RootStack.Screen name='OwnerSignUpScreen' component={OwnerSignUpScreen}/>
    </RootStack.Navigator>
  );
};
export default RootStackScreen;