import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import Carousel from 'react-native-snap-carousel-v4';

//var para definir uma largura e altura para a lista de imagens
var { width, height} = Dimensions.get('window');

export default function ListaMovies({data}){
    const navigation = useNavigation;
    const moveClick = () => {
        navigation.navigate('Movie',item);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Em cartaz</Text>

            <Carousel
                data={data}
                renderItem={({item}) => <MovieCard item={item} moveClick={moveClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width-130}
                slideStyle={{display: 'flex', alignItems:'center'}}
            />
        </View>
    )
}

//componente MovieCard, PRIMEIRO USAR SÓ ITEM, E ADIONAR CLICK APÓS IMAGENS APARECEREM
const MovieCard =({item, moveClick})=>{
    return(
        
        <TouchableWithoutFeedback onPress={moveClick}>
            {/*Fazer o texto com o text */}
           {/* <Text style={styles.text}>Movie</Text>*/ }

           <Image source={require('../assets/sharkLava.png')} style={{
                width: width-160,
                height: 300,
                borderRadius: 10,
            }}/>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#0D1D25",
      marginTop:20,
      padding:10,
    },

    text:{
        color:"#fff",
        fontSize:16,
        fontWeight: "bold",
        
      },

})