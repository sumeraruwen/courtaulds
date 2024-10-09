import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import { colors,dimensions,fontSizes } from '../styles/constants';
import axios from 'axios';


const SignUpScreen1 = ({navigation}) => {

    const customStyles = {
        backgroundColor: 'black',
        width: dimensions.widthLevel13,
        borderRadius: 12,
        textHeight: fontSizes.fontLarge,
        marginTop:'10%',
        color:"white"
        
        
       
      };
      const handleNextPress = async () => {
        try {
          const response = await axios.post('http://192.168.160.249:8000/users/', {
            name,
            email,
            phone,
            password
          });
      
          console.log('Sign-up successful:', response.data);
          navigation.navigate('SignIn');
        } catch (error) {
          console.error('Error during sign-up:', error.message);
          // Handle errors
        }
      };
      const handleSignIn = () => {
        navigation.navigate('SignIn');
        
      };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

 

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
        <View style={styles.headingContainer} >
        <Text style={styles.heading}>Sign Up</Text>
        </View>
     
        <View style={styles.mainContainer} >
      <View style={styles.inputContainer}>
        <Text style={styles.text1}>Name</Text>
        <TextInput
          style={styles.input}
         // placeholder="Enter your email"
          onChangeText={(text) => setName(text)}
        />
      </View>
    
      <View style={styles.inputContainer}>
        <Text style={styles.text1} >E-mail</Text>
        <TextInput
          style={styles.input}
         // placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setRememberMe(!rememberMe)}
        >
          {rememberMe ? (
            <Text>✓</Text>
          ) : (
            <Text>◻️</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.rememberText}>Two factor Authetication</Text>
        
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text1}>Phone</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
         // placeholder="Enter your email"
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text1}>Password</Text>
        <TextInput
          style={styles.input}
         // placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
          <ButtonComponent
            text="Submit"
            onPress={handleNextPress}
            customStyles={customStyles}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '9%',justifyContent:'center' }}>
        <Text style={{color:colors.black,fontSize:fontSizes.fontMidMedium}}>Already Have an Account ? </Text>
        <TouchableOpacity onPress={handleSignIn}> 
        <Text style={{color:'#37B47E',fontSize:fontSizes.fontMidMedium,fontWeight:'bold'}}>Sign In</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
       },
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color of the screen
  },
  headingContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'15%',
    marginBottom:'5%'
  },
  mainContainer:{
    width:'100%',
    paddingHorizontal: dimensions.paddingLevel5,
  },
  heading: {
    fontSize: fontSizes.fontXXXLarge,
    marginBottom: '3%',
    fontWeight:'bold',
    color: colors.black,
  },
  inputContainer: {
    marginBottom: '5%',
    marginTop:'6%'
  },
  input: {
    width: '100%',
    borderBottomWidth: 1, // Remove the border here
    fontSize: fontSizes.fontMidMedium,
    borderBottomColor: 'gray',
  },
  text1:{
    fontSize: fontSizes.fontMediumPlus,
    color:colors.black
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
  },
  checkbox: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: '#37B47E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '3%',
  },
  rememberText: {
    fontSize: fontSizes.fontMidMedium,
    marginRight: 'auto',
    color: '#37B47E',
    fontWeight:'500'
   
   
  },
  
});

export default SignUpScreen1;
