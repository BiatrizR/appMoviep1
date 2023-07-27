import React from 'react';
import { View , Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';



export function Movies({title, data}) {
  return (
    <View style={styles.container}>
         <View style={styles.containerTwo}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity>
                    <Text style={styles.textTwo}>Veja mais</Text>
            </TouchableOpacity>
           </View>
           
           <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:15}}>
               {}
            </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#0D1D25",
      marginTop:20,
      padding:10,
    },

    containerTwo:{
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingTop:50,
        marginLeft:10,
        marginRight: 10,
       
      },

      text:{
        color:"#fff",
        fontSize:16,
        fontWeight: "bold",
        
      },

      textTwo:{
        color:"red",
        fontSize:16,
        fontWeight: "light",
        
      },
});