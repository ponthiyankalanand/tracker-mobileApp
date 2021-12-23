import React, { useState} from 'react';
import { StyleSheet,Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';


export default function login( { navigation } ){
	const [userName, setName] = useState();
	const [Password, setPassword] = useState();
	const [serviceID, setserviceID] = useState();
	const [data, setData] = useState();
	const [message, setmessage] = useState();


	const pressHandler = (val) =>{
		navigation.navigate('Home', {token:val} );
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
                username: userName,
                password: Password            })
        })
      		const json = await response.json(); 
      		if (json.status == "S1177")
      		{    
      			pressHandler(json.token);	 
      		}
      		else{
      			console.log("failed")
      			setmessage('Username or Passowrd wrong')
      			 
      		}
      		
      		
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
			<Text style={styles.boldText}>Sync Account</Text>
			<View style={styles.buttonContainer}>
			<TextInput style={styles.input} placeholder='User Name'
			onChangeText={(val) => setName(val)}/>
			<TextInput style={styles.input} placeholder= 'Password'
			onChangeText={(val) => setPassword(val)}/>
			<Text style={styles.warning}>{message}</Text>
			<Button title='Verify Account' onPress={fetchtoken} />
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
		borderColor: '#777',
		padding: 20,
		margin:10


	},
	warning:{
		color: 'red',
		margin:10
	}

})