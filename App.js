import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useEffect from 'react';
import RootStackScreen from './screens/RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContextProvider} from './context/AuthContext'

export default function App() {

  return (
    <AuthContextProvider>
    <NavigationContainer>
      <RootStackScreen/>
     
      {/* <LoginScreen></LoginScreen> */}
    </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
