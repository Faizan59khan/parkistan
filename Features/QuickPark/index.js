import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Search from '../../components/Search';
import {useAuthContext} from '../../hooks/useAuthContext';
import { parkingLocations } from '../../data/parkingLocations';
const App = () => {
  
  const {search: searchValue}=useAuthContext();

   const [searchParking,setSearchParking]=useState({ latitude: 24.9365694,
      longitude: 67.0822045, latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,});
  console.log(searchParking)
  useEffect(()=>{
  
    if(searchValue){
    console.log("search=>"+searchValue);
    parkingLocations.forEach((loc)=>{
      if(searchValue.includes(loc.name)){
        console.log(loc)
        setSearchParking(
          {latitude: loc.latitude,
           longitude: loc.longitude,
           latitudeDelta: loc.latitudeDelta,
           longitudeDelta: loc.longitudeDelta,
        })
      }
    })
   
    }
  },[searchValue])
 

  return (
    <View style={styles.container}>
      <Search/>
      <MapView
        style={{ alignSelf: 'stretch', height: '80%', width: '100%' }}
        region={searchParking}
      >
        <Marker coordinate={searchParking} title='Marker' color="pink" />
        
      </MapView>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});