// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
// import ButtonComponent from '../components/ButtonComponent';
// import { colors,dimensions,fontSizes } from '../styles/constants';

// const SignUpScreen2 = ({navigation}) => {

//     const customStyles = {
//         backgroundColor: 'black',
//         width: dimensions.widthLevel13,
//         borderRadius: 12,
//         textHeight: fontSizes.fontLarge,
//         marginTop:'5%',
//         color:"white" 
//       };

//       const handleSubmitPress = () => {
//         navigation.navigate('VerificationScreen');
//       };

//       const handleSignIn = () => {
//         navigation.navigate('SignIn');
//       };

//   const [age, setAge] = useState('');
//   const [weight, setWeight] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

  

//   return (
//     <ScrollView contentContainerStyle={styles.scrollViewContent}>
//     <View style={styles.container}>
//         <View style={styles.headingContainer} >
//         <Text style={styles.heading}>Sign Up</Text>
//         </View>
     
//         <View style={styles.mainContainer} >
//       <View style={styles.inputContainer}>
//         <Text style={styles.text1}>Age</Text>
//         <TextInput
//           style={styles.input}
//          // placeholder="Enter your email"
        
//           onChangeText={(text) => setAge(text)}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.text1}>Weight</Text>
//         <TextInput
//           style={styles.input}
//          // placeholder="Enter your email"
        
//           onChangeText={(text) => setWeight(text)}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.text1}>Password</Text>
//         <TextInput
//           style={styles.input}
//          // placeholder="Enter your password"
//           secureTextEntry={true}
//           onChangeText={(text) => setPassword(text)}
//         />
//       </View>
//       <View style={styles.checkboxContainer}>
//         <TouchableOpacity
//           style={styles.checkbox}
//           onPress={() => setRememberMe(!rememberMe)}
//         >
//           {rememberMe ? (
//             <Text>✓</Text>
//           ) : (
//             <Text>◻️</Text>
//           )}
//         </TouchableOpacity>
//         <Text style={styles.rememberText}>I have read and agree to the privacy and policy statement</Text>
       
//       </View>
//       <View style={{ alignItems: 'center' }}>
//           <ButtonComponent
//             text="Submit"
//             onPress={handleSubmitPress}
//             customStyles={customStyles}
//           />
//         </View>
//         <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '9%',justifyContent:'center' }}>
//         <Text style={{color:colors.black,fontSize:fontSizes.fontMidMedium}}>Already Have an Account ? </Text>
//         <TouchableOpacity onPress={handleSignIn}> 
//         <Text style={{color:'#37B47E',fontSize:fontSizes.fontMidMedium,fontWeight:'bold'}}>Sign In</Text>
//         </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//     scrollViewContent: {
//         flexGrow: 1,
//        },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   headingContainer:{
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop:'15%',
//     marginBottom:'5%'
//   },
//   text1:{
//     fontSize: fontSizes.fontMediumPlus,
//     color:colors.black
//   },
//   mainContainer:{
//     width:'100%',
//     paddingHorizontal: dimensions.paddingLevel5,
//   },
//   heading: {
//     fontSize: fontSizes.fontXXXLarge,
//     marginBottom: '3%',
//     fontWeight:'bold',
//     color: colors.black,
//   },
//   inputContainer: {
//     marginBottom: '4%',
//     marginTop:'10%',
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     borderBottomWidth: 1, 
//     borderBottomColor: 'gray',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: '5%',
//     marginTop:'20%'
//   },
//   checkbox: {
//     width: 18,
//     height: 18,
//     borderWidth: 1,
//     borderColor: '#37B47E',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: '3%',
//   },
//   rememberText: {
//     fontSize: fontSizes.fontMidMedium,
//     marginRight: 'auto',
//     color: '#37B47E',
//     padding: dimensions.paddingLevel2,
//     fontWeight:'500'
   
//   },
 
// });

// export default SignUpScreen2;
