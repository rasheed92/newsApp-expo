import React from 'react'
import {View,Text} from 'react-native'

import NewsItem from './newsitem';
export default class NewsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:props.news
        }
    }
    render(){
        const { news }=this.props;
        const newsList =news.map((newsItemData,i)=><NewsItem key={i} item={newsItemData}/>)
        return(
            // <View>
            // <Text>Hello wordl</Text>
            <View style={{flex:1,backgroundColor:"blue"}}>
            {newsList}
            </View>
        )
    }
}