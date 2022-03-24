import { View, Text ,StyleSheet, Modal} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { getWorkoutBySlug } from '../storage/workout'
import { useWorkoutBySlug } from '../hooks/useWorkoutBySlug'
import { PressableText } from '../components/styled/PressableText'

type DetailsType ={
route:{
  params:{

    slug : string
  }
}
}


type Navigation = NativeStackHeaderProps & DetailsType


export default function WorkoutDetailsScreen({ route} : Navigation) {

  const [ isModalVisible , setModalVisible] = useState(false)


  const workout = useWorkoutBySlug(route.params.slug)

  
  
  if(!workout){

    return null;
  }
  
  return (
    <View style={styles.container}>
     <Text style={styles.header}> { workout.name}</Text>
     <PressableText text="Check Sequence" onPress={ () => setModalVisible(true)}/>
     <Modal 
     visible={isModalVisible}
     transparent={false}
     animationType = "slide"
     >
       <View style={styles.centerView}>
       <Text>Hello there</Text>
       <PressableText text="Close" onPress={ () => setModalVisible(false)}/>
       </View>
     </Modal>
     
    
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
  },
  centerView:{
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  }
})
