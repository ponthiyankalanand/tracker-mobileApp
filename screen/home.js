import React, { useState, useEffect } from 'react';
import { ImageBackground,Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
export default function home({ navigation, route }){
	const token  = navigation.getParam('token');
  const userid  = navigation.getParam('userID');
	//const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [message, setmessage] = useState();
  let loc='';
  let location='';   
  async function sendLocation() {
    try{
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
        loc = await Location.getCurrentPositionAsync({});
    }
    catch{
      console.log('fetch location failed');
    }
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
          if (json.status == "001"){     
              console.log("location update Success") 
              setmessage('location updated');
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
    <ImageBackground source={require('../assets/background.png')} style={styles.image} >
      <View style={styles.container}>
        <Text style={styles.paragraph}>{message}</Text>
      </View>
    </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: "center",
    weight:'100%',
    heiht:'100%'
  },
});
