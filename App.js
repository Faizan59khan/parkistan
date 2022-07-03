import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useEffect from 'react';
import RootStackScreen from './screens/RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {

  return (
    <NavigationContainer>
      <RootStackScreen/>
     
      {/* <LoginScreen></LoginScreen> */}
    </NavigationContainer>
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
