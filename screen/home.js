import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

export default function home({ navigation, route }){
	/*const text =  this.props.navigation.getParam('userName')
	const text = this.props.navigation.getParams('userName','nothing sent');*/
	const token  = navigation.getParam('token');

	return(
		<View style={styles.container}>

			<Text>{ token }</Text>
			
			 
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