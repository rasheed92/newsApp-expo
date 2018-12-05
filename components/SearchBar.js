import React from 'react'
import {View,Text,TextInput,StyleSheet,Image} from 'react-native'

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            value: ""
         };
      }
      search(text="iraq"){
          this.setState({value:text})
          this.props.searchFun(text)
          console.log(text)
      }
    render(){
        return(
            // <View>
            // <Text>Hello wordl</Text>
            <View style={{flex:0.1,backgroundColor:"green"}}>
               <TextInput
        style={{height: 40, borderColor: 'white', borderWidth: 1}}
        onChangeText={this.search.bind(this)}
       
        value={this.state.value}
    
    
        />

         
            </View>
        )
    }
}

