import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export default function TestScreen({navigation} :NativeStackHeaderProps) {
  
  return (
    <View>
      <Text>TestScreen</Text>
      <Button title='Go to Home' onPress={()=> navigation.push("Root")}/>
    </View>
  )
}