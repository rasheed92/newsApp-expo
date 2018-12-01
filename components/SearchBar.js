import React from 'react'
import {View,Text,TextInput} from 'react-native'

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
      }
    render(){
        return(
            // <View>
            // <Text>Hello wordl</Text>
            <View style={{flex:0.1,backgroundColor:"green"}}>
               <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
       
        value={this.state.text}
      />
            </View>
        )
    }
}