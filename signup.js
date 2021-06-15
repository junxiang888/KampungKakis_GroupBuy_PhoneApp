import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';
export default function AddScreen({ route, navigation }) {

const [text, setText] = useState("");
const textAlignments = ["auto", "left", "right", "center", "justify"];

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
        value={text}
        onChangeText={(newText) => setText(newText)}
    ></TextInput>
      <Text style={styles.labelmobile}>{'\n'}Mobile Number</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(newText) => setText(newText)}
    ></TextInput>
      <Text style={styles.labelpc}>{'\n'}Postal Code</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(newText) => setText(newText)}
    ></TextInput>
      <Text style={styles.labelpw}>{'\n'}Set a Password</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(newText) => setText(newText)}
    ></TextInput>
    <View style={styles.buttons}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
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
