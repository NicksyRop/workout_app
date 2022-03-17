import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import { Workout } from '../types/data'

export default function WorkoutItem({item} : {item : Workout}) {
  return (
    <View style={styles.container}>
       <Text style={styles.name}>{item.name}</Text>
       <Text style={styles.duration}>Duration :{item.duration}</Text>
        <Text style={styles.difficulty}>Difficulty :{item.difficulty}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
 container :{
    borderRadius : 10,
    borderColor : "grey",
    borderWidth : 1,
    padding : 10,
    marginBottom : 10

 },

 name :{
fontSize : 15,
fontWeight :"bold"

 },
 difficulty :{
     fontSize : 15

},
duration :{
    fontSize:15
}
})