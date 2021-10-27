import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

export default function login( { navigation } ){
	const [userName, setName] = useState();
	const [Password, setPassword] = useState();
	const [serviceID, setserviceID] = useState();
	const pressHandler = () =>{
		navigation.navigate('Home',userName)
	}


	return(
		<View style={styles.container}>
			<Text style={styles.boldText}>Sync Account</Text>
			<View style={styles.buttonContainer}>
			<TextInput style={styles.input} placeholder='User Name'
			onChangeText={(val) => setName(val)}/>
			<TextInput style={styles.input} placeholder= 'Password'
			onChangeText={(val) => setPassword(val)}/>
			<TextInput style={styles.input} placeholder= 'Service ID'
			onChangeText={(val) => setserviceID(val)}/>

				
			<Button title='Sync' onPress={pressHandler} />
			</View>
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