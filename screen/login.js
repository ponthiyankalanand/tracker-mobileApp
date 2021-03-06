import React, { useState} from 'react';
import { ImageBackground,StyleSheet,Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
export default function login( { navigation } ){
	const [userName, setName] = useState();
	const [Password, setPassword] = useState();
	const [serviceID, setserviceID] = useState();
	const [data, setData] = useState();
	const [message, setmessage] = useState();
	const pressHandler = (val1,val2) =>{
		navigation.navigate('Home', {token:val1,userID:val2} );
	}
	const SignUP = () =>{
		navigation.navigate('SignUp');
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
      		if (json.status == "001")
      		{    
      			pressHandler(json.token,json.userID);	 
      		}
      		else{
      			console.log("failed")
      			setmessage('Username or Passowrd wrong');      			 
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
		<ImageBackground source={require('../assets/background.png')} style={styles.image} >
			<View style={styles.container}>  			 
				<Text style={styles.boldText}>Sync Account</Text>
				<View style={styles.buttonContainer}>
					<TextInput style={styles.input} placeholder='User Name' onChangeText={(val) => setName(val)}/>
					<TextInput style={styles.input} placeholder= 'Password' onChangeText={(val) => setPassword(val)}/>
					<Text style={styles.warning}>{message}</Text>
					<Button title='Verify Account' onPress={fetchtoken} />
				</View>
				<Button title='SignUP' onPress={SignUP}/>
			</View>
		</ImageBackground>
	);
}
	const styles = StyleSheet.create({
		container:{
			alignItems: 'center',
			justifyContent:'center',
			padding:20,
			color: 'white'
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
		},
		image: {
	    flex: 1,
	    justifyContent: "center",
	    weight:'100%',
	    heiht:'100%'
	},
})