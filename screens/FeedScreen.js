import React from 'react';
import { StatusBar } from 'react-native-web';

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

//icone do menu
import Ionicons from "@expo/vector-icons/Ionicons"

export default function FeedScreen() {
    return (
        <View style={styles.container}>
         
         <StatusBar style="light"/>
         <View style={styles.containerTwo}>

            <Ionicons name="menu-outline" size={32} color="white"/>

         </View>

        </View>
   
    );
  }
  
 const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#0D1D25"
  },
  containerTwo:{
    justifyContent: 'space-between',
    alignItems: "left",
    paddingTop:50,
    paddingLeft: 10,
  
  }
 })