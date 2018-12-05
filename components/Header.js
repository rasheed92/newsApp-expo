import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

export default class Header extends React.Component{
    render(){
        return(
            // <View>
            // <Text>Hello wordl</Text>
           
            <View style={styles.container}>
            <Image style={styles.Image} resizeMode="center" source={require("../assets/logo.png")}/>
            <Text style={styles.titel}>News App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:60,flexDirection:"row",backgroundColor:"red",justifyContent:"center" 
    },
    Image:{
        height:50,width:50,alignSelf:"flex-start",
    },
    titel:{
        marginLeft:60
    }
  });
  
  