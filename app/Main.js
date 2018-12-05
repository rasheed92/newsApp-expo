import React from 'react'
import {View,Text} from 'react-native'
import Header from '../components/Header'
import NewsList from '../components/NewsList'
import SearchBar from '../components/SearchBar'
import {Constants} from 'expo'
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
        }
    }
    componentDidMount(){
        this.search("iraq")
    }
    search(q){
        fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=978d6c3818ff431b8c210ae86550fb1f`)
        .then((res)=>res.json())
        .then(news =>{
            this.setState({news:news.articles});

        }).catch((err)=>{
            console.log(err)
        });
    }

    render(){
        return(
            <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
            <Header/>
            <SearchBar searchFun={this.search.bind(this)}/>
            <NewsList news={this.state.news}/>
            </View>
        )
    }
}