import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ExerciseComponent from '../components/ExerciseComponent';

const ExerciseScreen2 = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    // Navigate to the next screen
    navigation.navigate('ExerciseScreen3');
  };

  return (
    <ExerciseComponent
      videoSource={require('../assets/ex2.mp4')}
      exerciseName="PIKE PUSHUPS"
      exerciseCount="x 16"
      buttonText="DONE"
      onPress={handleNextPress}
    />
  );
};

export default ExerciseScreen2;
