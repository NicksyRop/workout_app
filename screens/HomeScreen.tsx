import { View, Text ,StyleSheet ,FlatList, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Fredoka } from '../components/styled/Fredoka'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Workout } from '../types/data'
import WorkoutItem from '../components/WorkoutItem'
import { getWorkouts } from '../storage/workout'
import { useWorkouts } from '../hooks/useWorkouts'

export default function HomeScreen({navigation} :NativeStackHeaderProps) {


  const workouts = useWorkouts();
  
  return (
    <View style={styles.container}>
     <Text style={styles.header}>New Workouts</Text>
     {/* <Fredoka text="New Workouts" style={{fontSize : 30}} /> */}
   
      <FlatList data={workouts}
       renderItem={ ({item}) =>{

        return(
          <Pressable onPress={ () => navigation.navigate("WorkoutDetail", { slug : item.slug})}>
            <WorkoutItem item={item}/>
          </Pressable>
          
        )
       } }
     keyExtractor={ item => item.slug} />
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