import React from 'react'
import {View,Text,Image} from 'react-native'

export default class Header extends React.Component{
    render(){
        return(
            // <View>
            // <Text>Hello wordl</Text>
           
            <View style={{height:60,flexDirection:"row",backgroundColor:"red"}}>
            <Image style={{height:30}} resizeMode="center" source={require("../assets/logo.png")}/>
            <Text>News App</Text>
            </View>
        )
    }
}