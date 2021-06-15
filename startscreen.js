import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StartScreen = ({navigation }) => {
    return(
      <View style = {{flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
        <Text> Welcome To Kampung Kakis </Text>
        <Button 
          title = 'Enter!'
          onPress ={() => navigation.navigate('Onboard')} /> 
      </View>
    )
  }
export default StartScreen;
