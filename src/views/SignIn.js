import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,ScrollView,Image } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import axios from 'axios';
import { colors, dimensions,fontSizes } from '../styles/constants';

const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const customStyles = {
        backgroundColor: 'black',
        width: dimensions.widthLevel13,
        borderRadius: 12,
        textHeight: fontSizes.fontLarge,
        marginTop:'23%',
        color:"white"
       
      };

      // const handleSignIn = () => {
      //   navigation.navigate('HomeScreen');
        
      // };

      // const handleSignIn = async () => {
      //   try {
      //     const response = await axios.post('http://192.168.160.249:8000/signin/', {
      //       email,
      //       password,
      //     });
    
      //    console.log('Sign-in successful:', response.data);
      //     navigation.navigate('HomeScreen');
      //   } catch (error) {
      //     console.error('Error during sign-in:', error.message);
      //     // Handle errors
      //   }
      // };
      const handleSignIn = async () => {
       
          navigation.navigate('HomeScreen');
       
      };
    

      const handleSignUp = () => {
        navigation.navigate('SignUpScreen1');
        
      };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
        <View style={styles.headingContainer} >
        <Text style={styles.heading}>Sign In</Text>
        </View>
     
        <View style={styles.mainContainer} >
      <View style={styles.inputContainer}>
        <Text style={styles.text1}>E-mail</Text>
        <TextInput
          style={styles.input}
         // placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
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
        <Text style={styles.rememberText}>Remember Me</Text>
        <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
          <ButtonComponent
            text="Sign In"
            onPress={handleSignIn}
            customStyles={customStyles}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '9%',justifyContent:'center' }}>
        <Text style={{color:colors.black,fontSize:fontSizes.fontMidMedium}}>Don't Have an Account ? </Text>
        <TouchableOpacity onPress={handleSignUp}>
        <Text style={{color:'#37B47E',fontSize:fontSizes.fontMidMedium,fontWeight:'bold'}}>Sign Up</Text>
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
   //  justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fff', // Background color of the screen
  },
  headingContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'18%',
    marginBottom:'5%'
  },
  text1:{
    fontSize: fontSizes.fontMediumPlus,
    color:colors.black
  },
  mainContainer:{
  // justifyContent: 'center',
    //alignItems: 'center',
    width:'100%',
    paddingHorizontal: dimensions.paddingLevel5,
  },
  heading: {
    fontSize: fontSizes.fontXXXLarge,
    marginBottom: '2%',
    fontWeight:'bold',
    color: colors.black,
  },
  inputContainer: {
    marginBottom: '6%',
    marginTop:'10%',
  },
  input: {
    width: '100%',
   // padding: 10,
    borderBottomWidth: 1, // Remove the border here
    fontSize: fontSizes.fontMidMedium,
    borderBottomColor: 'gray',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '8%',
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
    fontSize: fontSizes.fontMedium,
    marginRight: 'auto',
    color: '#37B47E',
    fontWeight:'500'
   
  },
  forgetPasswordText: {
    fontSize: fontSizes.fontMedium,
    marginLeft: 'auto',
    color: '#37B47E',
    fontWeight:'500'
    
  },
  // passwordInput: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderBottomWidth: 1, // Remove the border here
  //   fontSize: fontSizes.fontMidMedium,
  //   borderBottomColor: 'gray',
  // },
  
  eyeIconContainer: {
    padding: 10,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  
  eyeIcon: {
    width: 25,
    height: 15,
    tintColor: 'gray',
  },
  
});

export default SignInScreen;


