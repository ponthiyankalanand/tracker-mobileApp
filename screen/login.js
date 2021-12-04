import React, { useState} from 'react';
import { StyleSheet,Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';


export default function login( { navigation } ){
	const [userName, setName] = useState();
	const [Password, setPassword] = useState();
	const [serviceID, setserviceID] = useState();
	const [token, settoken] = useState();
	const [data, setData] = useState();

	const pressHandler = () =>{
		navigation.navigate('Home', {token:data} );
	}

/* get request for fetch token */
	const [isLoading, setLoading] = useState(true);
  	

  	const fetchtoken = async () => {
    	try {
    		const response = await fetch('http://127.0.0.1:8000/token',{
        		method: 'post',
        		 headers: {
                Accept: 'application/json',
             	'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'user',
                password: 'admin'
            })
        })
      		const json = await response.json();
      		setData(json.token);
      		pressHandler();
      		
    	}
    	catch (error) {
      		console.error(error);
    	} 
    	finally {
      		setLoading(false);
   		}

  	}

 


	return(
		<View style={styles.container}>
 			 
          	 
          	 
            <Text>{data}</Text>
         	 
         
			<Text style={styles.boldText}>Sync Account</Text>
			<View style={styles.buttonContainer}>
			<TextInput style={styles.input} placeholder='User Name'
			onChangeText={(val) => setName(val)}/>
			<TextInput style={styles.input} placeholder= 'Password'
			onChangeText={(val) => setPassword(val)}/>
			<TextInput style={styles.input} placeholder= 'Service ID'
			onChangeText={(val) => setserviceID(val)}/>

				
			<Button title='Sync' onPress={fetchtoken} />
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