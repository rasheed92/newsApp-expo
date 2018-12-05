import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

export default class NewsItem extends React.Component{
    render(){
        const {item}=this.props;
        const {desctiption,publishedAt,title,urlToImage}=item;
        return(
            // <View>
            // <Text>Hello wordl</Text>
           
            <View style={styles.container}>
            <Image style={styles.Image} resizeMode="center" source={{url:urlToImage}}/>
            <View>
            <Text style={styles.titel}>{title}</Text>
            <Text style={styles.titel}>{desctiption}</Text>
            <Text style={styles.titel}>{publishedAt}</Text>
            </View></View>
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
  
  