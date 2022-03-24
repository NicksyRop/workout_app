import { View, Text ,StyleSheet, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { getWorkoutBySlug } from '../storage/workout'
import { useWorkoutBySlug } from '../hooks/useWorkoutBySlug'

type DetailsType ={
route:{
  params:{

    slug : string
  }
}
}


type Navigation = NativeStackHeaderProps & DetailsType


export default function WorkoutDetailsScreen({ route} : Navigation) {


  const workout = useWorkoutBySlug(route.params.slug)

  
  
  if(!workout){

    return null;
  }




 
  
  return (
    <View style={styles.container}>
     <Text style={styles.header}> { workout.name}</Text>
     <Pressable onPress={() => alert("opening modal")}>
       <Text style={{ textDecorationLine : "underline"}}>check sequence</Text>
     </Pressable>
    
    </View>
  )
}

const styles = StyleSheet.create({

  container :{
    padding : 20,
    flex : 1
  }, 
  header :{
    fontSize : 20,
    marginBottom : 20,
    fontFamily : "fredoka"
  }
})