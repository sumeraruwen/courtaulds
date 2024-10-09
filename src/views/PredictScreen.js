import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { colors, dimensions, fontSizes } from '../styles/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';



const apiUrl = 'http://192.168.160.249:8000/predict_calories';


const PredictScreen = ({navigation}) => {
  const [inputs, setInputs] = useState({
    Gender: '',
    Age: '',
    Height: '',
    Weight: '',
    Duration: '',
    Heart_rate: '',
    Body_temp: '',

   
  });

  const [calories, setCalories] = useState(null);

  const handleInputChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };
  const handleViewDietPlan = () => {
    // Navigate to the DietPlanScreen and pass predicted calories as a parameter
    navigation.navigate('DietPlanScreen', { predictedCalories: calories });
  };

  const predictCalories = async () => {
   

    try {
      const convertedInputs = {
        ...inputs,
        Age: parseInt(inputs.Age),
        Body_temp: parseInt(inputs.Body_temp),
        Duration: parseInt(inputs.Duration),
        Gender: parseInt(inputs.Gender),
        Heart_rate: parseInt(inputs.Heart_rate),
        Height: parseInt(inputs.Height),
        Weight: parseInt(inputs.Weight),
      };

      console.log('Input Data:', convertedInputs);

      const response = await axios.post(apiUrl, convertedInputs);
    // const response = await axios.post(apiUrl, convertedInputs, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

      console.log('Response:', response.data);

      const predictedCalories = response.data.prediction;
      setCalories(predictedCalories);
    } catch (error) {
      console.error('Error predicting calories:', error);
    }


  };

  return (
    <View style={styles.container}>
       <Text style={styles.heading1}>Congratulations you are sucessfully completed the exercises ..!</Text>
      <Text style={styles.heading2}>CHECK YOUR CALORIES</Text>
      {/* Gender Picker */}
      <Picker
        selectedValue={inputs.Gender}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => handleInputChange('Gender', itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="0" />
        <Picker.Item label="Female" value="1" />
      </Picker>

       <TextInput
        placeholder="Age"
        value={inputs.Age}
        style={styles.textInput}
        onChangeText={(text) => handleInputChange('Age', text)}
      />
       <TextInput
        placeholder="Height"
        value={inputs.Height}
        style={styles.textInput}
        onChangeText={(text) => handleInputChange('Height', text)}
      />
       <TextInput
        placeholder="Weight"
        value={inputs.Weight}
        style={styles.textInput}
        onChangeText={(text) => handleInputChange('Weight', text)}
      />
       <TextInput
        placeholder="Duration"
        value={inputs.Duration}
        style={styles.textInput}
        onChangeText={(text) => handleInputChange('Duration', text)}
      />
        <TextInput
        placeholder="HeartRate"
        value={inputs.Heart_rate}
        style={styles.textInput}
        onChangeText={(text) => handleInputChange('Heart_rate', text)}
      />
        <TextInput
        placeholder="BodyTemperature"
        value={inputs.Body_temp}
        style={styles.textInput}
        onChangeText={(text) => handleInputChange('Body_temp', text)}
      />
     
     {calories !== null && <Text style={styles.text}>Predicted Calories: {calories}</Text>}
     <View
     style={{flexDirection:'row',justifyContent:'center',textAlign:'center'}}
     >
      
      {/* Add similar TextInput components for other input fields */}
      <TouchableOpacity  onPress={predictCalories} style={styles.button} >
        <Text style={styles.buttonText}>Predict Calories</Text>
        </TouchableOpacity>
      {/* {calories !== null && <Text>Predicted Calories: {calories}</Text>} */}

       {/* Add a button for viewing diet plans */}
       <TouchableOpacity  onPress={handleViewDietPlan} style={styles.button2} >
       <Text style={styles.buttonText}>View Diet Plan</Text>
         </TouchableOpacity>
      
       </View>

      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    marginBottom: 20,
    borderColor: 'black',
  },
  textInput:{
    borderWidth: 1,
    borderRadius: 5,
    //padding:10,
    width:200,
    marginBottom:20,
    borderColor: 'gray',
  },
  heading2:{
    color: 'black',
    fontSize: fontSizes.fontLarge,
    fontWeight: 'bold',  
   // marginTop:'100%',
    marginBottom:'5%'
  },
  heading1:{
    color: 'red',
    fontSize: fontSizes.fontMidMedium,
   // fontWeight: 'bold',  
   // marginTop:'100%',
    marginBottom:'5%'
  },
  text: {
    color: 'black',
    fontSize: fontSizes.fontMediumPlus,
    marginTop: '5%',
    marginBottom:'5%'
   // fontSize:fontSizes.fontMedium
  },
  button: {
    backgroundColor: '#0000CD',
    height: 45,
    borderRadius: 8,
    width:150,
    marginTop: '10%',
    justifyContent:'center',
    alignItems: 'center',
    margin:10
  },
  button2: {
    backgroundColor: '#37B47E',
    height: 45,
    borderRadius: 8,
    width:150,
    marginTop: '10%',
    justifyContent:'center',
    alignItems: 'center',
    margin:10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    
  },
});

export default PredictScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { colors, dimensions, fontSizes } from '../styles/constants';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// // const apiUrl = 'http://127.0.0.1:8000//predict_calories'; 
// // const apiUrl = 'http://192.168.1.102:8000/predict_calories';
// const apiUrl = 'https://restcountries.com/v3.1/name/eesti';

// const PredictScreen = ({navigation}) => {
//   const [inputs, setInputs] = useState({
//     Gender: '',
//     Age: '',
//     Height: '',
//     Weight: '',
//     Duration: '',
//     Heart_rate: '',
//     Body_temp: '',   
//   });

//   const [calories, setCalories] = useState(null);

//   const handleInputChange = (name, value) => {
//     setInputs({ ...inputs, [name]: value });
//   };

//   const handleViewDietPlan = () => {
//     // Navigate to the DietPlanScreen and pass predicted calories as a parameter
//     navigation.navigate('DietPlanScreen', { predictedCalories: calories });
//   };

//   const predictCalories = async () => {
//     try {
//       const convertedInputs = {
//         ...inputs,
//         Age: parseInt(inputs.Age),
//         Body_temp: parseInt(inputs.Body_temp),
//         Duration: parseInt(inputs.Duration),
//         Gender: parseInt(inputs.Gender),
//         Heart_rate: parseInt(inputs.Heart_rate),
//         Height: parseInt(inputs.Height),
//         Weight: parseInt(inputs.Weight),
//       };

//       console.log('Input Data:', convertedInputs);

//       const response = await axios.get(apiUrl);

//       console.log('Response:', response.data);

//       // Assuming you want to set the response data directly to calories
//       setCalories(response.data);
//     } catch (error) {
//       console.error('Error predicting calories:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading1}>Congratulations you are successfully completed the exercises ..!</Text>
//       <Text style={styles.heading2}>CHECK YOUR CALORIES</Text>
//       {/* Input fields for user data */}
//       {/* Add similar TextInput components for other input fields */}
//       <TouchableOpacity onPress={predictCalories} style={styles.button}>
//         <Text style={styles.buttonText}>Predict Calories</Text>
//       </TouchableOpacity>
//       {calories !== null && <Text style={styles.text}>Predicted Calories: {calories}</Text>}
//       <TouchableOpacity onPress={handleViewDietPlan} style={styles.button2}>
//         <Text style={styles.buttonText}>View Diet Plan</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textInput: {
//     borderWidth: 1,
//     borderRadius: 5,
//     width: 200,
//     marginBottom: 20,
//     borderColor: 'gray',
//   },
//   heading2: {
//     color: 'black',
//     fontSize: fontSizes.fontLarge,
//     fontWeight: 'bold',
//     marginBottom: '5%',
//   },
//   heading1: {
//     color: 'red',
//     fontSize: fontSizes.fontMidMedium,
//     marginBottom: '5%',
//   },
//   text: {
//     color: 'black',
//     fontSize: fontSizes.fontMediumPlus,
//     marginTop: '5%',
//     marginBottom: '5%',
//   },
//   button: {
//     backgroundColor: '#0000CD',
//     height: 45,
//     borderRadius: 8,
//     width: 150,
//     marginTop: '10%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },
//   button2: {
//     backgroundColor: '#37B47E',
//     height: 45,
//     borderRadius: 8,
//     width: 150,
//     marginTop: '10%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });

// export default PredictScreen;
