import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Button, Linking, ScrollView, RefreshControl, FlatList, SectionList, TextInput, ImageBackground, Image} from 'react-native'
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import StackNavigation from './src/navigation/StackNavigation';

const App =() =>{
  useEffect(() => {
   
      SplashScreen.hide();
    
  }, []);
 
 
  return(
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
  

      <NavigationContainer>

        <StackNavigation/>
       
    
      </NavigationContainer>
    
    </SafeAreaView>

   

  );
};

const styles =StyleSheet.create({
  body:{
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  
  },


});

 export default App;
