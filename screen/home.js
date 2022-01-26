import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function home({ navigation, route }){
	const token  = navigation.getParam('token');
  const userid  = navigation.getParam('userID');
	//const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let location='';
  let message='';
   
  async function sendLocation() {

    if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});

    console.log(loc.coords.latitude);
      try {
        const response = await fetch('http://127.0.0.1:8000/updateLocation',{
            method: 'post',
             headers: {
                Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'token ' + token
            },
        body: JSON.stringify({
        longitude:loc.coords.longitude,
        latitude:loc.coords.latitude,
        userID:userid,
        count:1         
        })
        })
          const json = await response.json(); 
          if (json.status == "001")
          {     
            console.log("location update Success") 
          }
          else{
            console.log("failed")
            setmessage('location update failed')
             
          }
          
          
      }
      catch (error) {
          console.error(error);
      } 

    }

sendLocation();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
