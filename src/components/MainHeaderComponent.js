import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,Modal } from 'react-native';
import { colors, dimensions, fontSizes } from '../styles/constants';
//import CustomDrawerComponent from '../components/CustomDrawerComponent';
import { useNavigation } from '@react-navigation/native';

const MainHeaderComponent = ({userImage }) => {

  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.openDrawer();
  };
 

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: dimensions.paddingLevel3,
      // alignItems: 'center',
       // justifyContent: 'space-between',
      //  borderBottomWidth: 1,
        backgroundColor:colors.white,
       // borderBottomColor: '#ccc',
        height:dimensions.heightLevel7
      }}
    >
    
        <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require('../assets/menu_icon.webp')} // Menu icon image
          style={{
         
          }}
        />
        </TouchableOpacity>
      
      <Text style={{ flex: 1, textAlign: 'center', fontWeight: '700',color:"#000",fontSize:fontSizes.fontXXLarge }}>
       Courtaulds
      </Text>
      <Image
        source={require('../assets/profile_icon.webp')}
        style={{
          width: 40,
          height: 40,
          borderRadius: 25,
        }}
      />


    </View>
  );
};

export default MainHeaderComponent;
