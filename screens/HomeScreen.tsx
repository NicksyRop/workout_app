import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export default function HomeScreen({navigation} :NativeStackHeaderProps) {
  
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Go to Planner' onPress={()=> navigation.navigate("Planner")}/>
    </View>
  )
}