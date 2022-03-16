import { View, Text ,Button } from 'react-native'
import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export default function PlannerScreen( {navigation} :NativeStackHeaderProps) {
  return (
    <View>
      <Text>PlannerScreen</Text>
      <Button title='Go to home' onPress={()=> navigation.navigate('Home')}/>

    </View>
  )
}