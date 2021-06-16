import { NavigationHelpersContext } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Main from './Screens/Main';
export default function AddScreen({ route, navigation }) {

const [text, setText] = useState("");
const [emailtext, setEmailText] = useState("");
const [phonetext, setPhoneText] = useState("");
const [postaltext, setPostalText] = useState("");
const [pwtext, setPWText] = useState("");
const textAlignments = ["auto", "left", "right", "center", "justify"];

const register = async (text, emailtext, phonetext, postaltext, pwtext) => {
  const stuff = ''
  fetch("https://ad403e0e242b.ngrok.io/register?name="+text+"&email="+emailtext+"&phone="+phonetext+"&postalcode="+postaltext+"&password="+pwtext,{mode: 'cors', method: "GET"}).then(response => response.text()).then(body=>stuff=body);
      console.log(stuff)
      if (stuff == 'Error') {
         alert('Wrong username/password')
      } else {
         this.props.navigation.navigate('Main')
  }
  }
  return (
    <View style={{ flex:1, alignItems: "center", justifyContent: "center"}}>
      <Text style={styles.labelmain}>Sign Up</Text> 
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(newText) => setText(newText)}
    ></TextInput>
      <Text style={styles.labelemail}>{'\t'}Email Address</Text>
      <TextInput
        style={styles.textInput}
        value={emailtext}
        onChangeText={(newText) => setEmailText(newText)}
    ></TextInput>
      <Text style={styles.labelmobile}>{'\n'}Mobile Number</Text>
      <TextInput
        style={styles.textInput}
        value={phonetext}
        onChangeText={(newText) => setPhoneText(newText)}
    ></TextInput>
      <Text style={styles.labelpc}>{'\n'}Postal Code</Text>
      <TextInput
        style={styles.textInput}
        value={postaltext}
        onChangeText={(newText) => setPostalText(newText)}
    ></TextInput>
      <Text style={styles.labelpw}>{'\n'}Set a Password</Text>
      <TextInput
        style={styles.textInput}
        value={pwtext}
        onChangeText={(newText) => setPWText(newText)}
    ></TextInput>
    <View style={styles.buttons}>
      <TouchableOpacity
        onPress={() =>  navigation.navigate('Main')}
        
        style={[styles.button, styles.submitButton]}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.button, styles.cancelButton]}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  labelmain: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 50,
  },
  label: {
    fontSize: 15,
    marginLeft: -220,
    marginBottom: -12,
  },
  labelemail: {
    fontSize: 15,
    marginLeft: -200,
    marginBottom: -12,
  },
  labelmobile: {
    fontSize: 15,
    marginLeft: -155,
    marginBottom: -12,
  },
  labelpc: {
    fontSize: 15,
    marginLeft: -185,
    marginBottom: -12,
  },
  labelpw: {
    fontSize: 15,
    marginLeft: -165,
    marginBottom: -12,
  },
  textInput: {
    margin: 20,
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
      padding: 10,
      margin: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  submitButton: {
    backgroundColor: "orange",
  },
  cancelButton: {
    backgroundColor:"red",
  },
});
