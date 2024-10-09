import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { colors, fontSizes } from '../styles/constants';

const DataEntryScreen = ({ route, navigation }) => {
  const { setPassCount, setFailCount, setFailReasons, passCount, failCount, failReasons } = route.params;
  const [failReason, setFailReason] = useState('');
  const [showFailInput, setShowFailInput] = useState(false);

  // Increment pass count and update parent state using functional update
  const handlePass = () => {
    setPassCount((prevPassCount) => prevPassCount + 1);
  };

  // Show TextInput for fail reason
  const handleFail = () => {
    setShowFailInput(true);
  };

  // Submit fail reason, increment fail count
  const handleSubmitFail = () => {
    if (failReason) {
      setFailCount((prevFailCount) => prevFailCount + 1);
      setFailReasons((prevFailReasons) => [...prevFailReasons, failReason]);  //add new reason
      setShowFailInput(false);  
      setFailReason(''); //reset input aftersubmit
    }
  };

  // Navigate back after updating counts
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePass}>
        <Text style={styles.buttonText}>Pass</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFail}>
        <Text style={styles.buttonText}>Fail</Text>
      </TouchableOpacity>

      {showFailInput && (
        <View style={styles.failInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Reason for Fail"
            value={failReason}
            onChangeText={setFailReason}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmitFail}>
            <Text style={styles.buttonText}>Submit Fail</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleBack}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
  },
  failInputContainer: {
    marginVertical: 20,
    width: '80%',
  },
  textInput: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default DataEntryScreen;
