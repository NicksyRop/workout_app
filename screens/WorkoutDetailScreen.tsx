import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

type DetailsType ={
route:{
  params:{

    slug : string
  }
}
}


type Navigation = NativeStackHeaderProps & DetailsType


export default function WorkoutDetailsScreen({ route} : Navigation) {

 
  
  return (
    <View style={styles.container}>
     <Text style={styles.header}> Slug - { route.params.slug}</Text>
    
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