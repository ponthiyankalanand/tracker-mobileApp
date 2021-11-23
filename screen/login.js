import React, { useState,useEffect } from 'react';
import { StyleSheet,FlatList, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';


export default function login( { navigation } ){
	const [userName, setName] = useState();
	const [Password, setPassword] = useState();
	const [serviceID, setserviceID] = useState();
	const [token, settoken] = useState();

	const pressHandler = () =>{
		 
		navigation.navigate('Home', {token:userName} );
	}

/* get request for fetch token */
	const [isLoading, setLoading] = useState(true);
  	const [data, setData] = useState([]);

  	const getMovies = async () => {
    	try {
    		const response = await fetch('https://reactnative.dev/movies.json');
      		const json = await response.json();
      		setData(json.movies);
    		}
    	catch (error) {
      		console.error(error);
    	} 
    	finally {
      		setLoading(false);
   		}
  	}

  	useEffect(() => {
    	getMovies();
  	}, []);


	return(
		<View style={styles.container}>
 			<FlatList
          	data={data}
          	 
          	renderItem={({ item } ) => (
            <Text>{item.id}</Text>
         	)}
        	/>
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