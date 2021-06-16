import { NavigationHelpersContext } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './Screens/Main';


const storeData = async (value) => {

   try {
     await AsyncStorage.setItem('cookie', value)
   } catch (e) {
     // saving error
   }
 }

const getData = async () => {
   try {
     const value = await AsyncStorage.getItem('cookie')
     if(value !== null) {
        return value    
     }
   } catch(e) {
     // error reading value
   }
 }
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
      fetch("https://ad403e0e242b.ngrok.io/login?phone="+email+"&password="+pass,{mode: 'cors', method: "GET"}).then(response => response.text()).then((body)=>{storeData(body);});
      const stuff = await getData()
      console.log(stuff)
      if (stuff == 'Error') {
         alert('Wrong username/password')
      } else {
         this.props.navigation.navigate('Main')
      }
      }
   
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput secureTextEntry={true} style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            <View style={{ flexDirection: "row",justifyContent:'center'}}>
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    () => this.login(this.state.email,this.state.password)
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