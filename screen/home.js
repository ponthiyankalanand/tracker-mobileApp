import React, { useState,useEffect } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

export default function home({ navigation, route }){
	const token  = navigation.getParam('token');
	const [latitude, setlat] = useState();
	const [longitude, setlong] = useState();
	var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  setlat(crd.latitude);
  setlong(crd.longitude);


}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
const fetchLocation=() => {
navigator.geolocation.getCurrentPosition(success, error, options);

}

useEffect(() => {
  fetchLocation()
 }, []);

setInterval(fetchLocation, 2000)

	return(
		<View style={styles.container}>

			<Text>{latitude},{ longitude }</Text>
			 
			 
		</View>

		);
}

const styles = StyleSheet.create({
	container:{
		alignItems: 'center',
		justifyContent:'center',
		padding:20,
		backgroundColor: 'lavender',


	},
	boldText:{
		fontWeight: 'bold',
	},
	buttonContainer:{
		marginTop:20
	},
	input:{
		boaderWidth: 1,
		borderColor: '#777',
		padding: 20,
		margin:10


	}

})