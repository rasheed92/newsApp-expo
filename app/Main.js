import React from 'react'
import {View,Text} from 'react-native'
import Header from '../components/Header'
import NewsList from '../components/NewsList'
import SearchBar from '../components/SearchBar'
import {Constants} from 'expo'
export default class Main extends React.Component{
    render(){
        return(
            <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
            <Header/>
            <SearchBar/>
            <NewsList/>
            </View>
        )
    }
}