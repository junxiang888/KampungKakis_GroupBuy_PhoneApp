import { NavigationHelpersContext } from '@react-navigation/native'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   //https://ad403e0e242b.ngrok.io/getchat?cookie=lgPn3k7vYXTo
   login = async (email, pass) => {
      const res = await fetch("https://ad403e0e242b.ngrok.io/getchat?cookie=lgPn3k7vYXTo",{mode: 'cors', method: "GET"})
      console.log(res)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            <View style={{ flexDirection: "row",justifyContent:'center'}}>
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    () => this.props.navigation.navigate('BottomNavigator')
                }>
                <Text style = {styles.submitButtonText}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    () => this.props.navigation.navigate('Signup')
                }>
                <Text style = {styles.submitButtonText}> Sign up </Text>
                </TouchableOpacity>
            </View>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})