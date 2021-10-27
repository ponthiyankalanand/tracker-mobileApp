import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

export default function home(){
	return(
		<View style={styles.container}>
			<Text style={styles.boldText}>home  page</Text>
			
			 
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