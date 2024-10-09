import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors, fontSizes } from '../styles/constants';

const DetailViewScreen = ({ route }) => {
  const { passCount = 0, failCount = 0, failReasons = [] } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pass Count: {passCount}</Text>
      <Text style={styles.text}>Fail Count: {failCount}</Text>

      {failCount > 0 && (
        <>
          <Text style={styles.text}>Fail Reasons:</Text>
          <FlatList
            data={failReasons}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.reasonText}>{item}</Text>}
          />
        </>
      )}
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
  text: {
    fontSize: fontSizes.medium,
    marginVertical: 10,
  },
  reasonText: {
    fontSize: fontSizes.small,
    color: colors.gray,
    marginBottom: 5,
  },
});

export default DetailViewScreen;
