import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import MainHeaderComponent from '../components/MainHeaderComponent';
import { colors, fontSizes } from '../styles/constants';

const HomeScreen = ({ navigation }) => {
  // State for pass and fail counts
  const [passCount, setPassCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [failReasons, setFailReasons] = useState([]);

  // Navigate to Data Entry Screen and pass setters to update pass/fail counts
  const handleDataEntry = () => {
    navigation.navigate('DataEntryScreen', {
      setPassCount,
      setFailCount,
      setFailReasons,
      passCount,
      failCount,
      failReasons,
    });
  };

  // Navigate to Detail View Screen and pass the counts and reasons
  const handleDetailView = () => {
    navigation.navigate('DetailViewScreen', {
      passCount,
      failCount,
      failReasons,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <MainHeaderComponent />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleDetailView}>
            <Text style={styles.buttonText}>Detail View</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleDataEntry}>
            <Text style={styles.buttonText}>Data Entry</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
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
});

export default HomeScreen;
