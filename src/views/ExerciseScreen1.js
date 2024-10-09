// // ExerciseScreen1.js

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';

// const ExerciseScreen1 = ({ navigation }) => {
//   const handleNextPress = () => {
//     // Navigate to the next screen
//    // navigation.navigate('ExerciseScreen2');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Video Animation */}
//       <Video
//         source={require('../assets/ex4.mp4')}  // Replace with your video URL
//         style={styles.video}
//         resizeMode="cover"
//         repeat
//       />

//       {/* Button to go to the next screen */}
//       <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   video: {
//     width: '100%',
//     height: '50%',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   nextButton: {
//     backgroundColor: '#FE3F3F',
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ExerciseScreen1;
// ExerciseScreen1.js

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ExerciseComponent from '../components/ExerciseComponent';

const ExerciseScreen1 = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    // Navigate to the next screen
    navigation.navigate('ExerciseScreen2');
  };

  return (
    <ExerciseComponent
      videoSource={require('../assets/ex6.mp4')}
      exerciseName="RUSSIAN TWIST"
      exerciseCount="x 8"
      buttonText="DONE"
      onPress={handleNextPress}
    />
  );
};

export default ExerciseScreen1;
