

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { getData, storeData ,containsKey } from '../storage'
import data from "../data.json"
import { clearWorkouts, getWorkouts, initWorkouts } from '../storage/workout'

export default function useCachedResources() {
 
    const [ isLoadingComplete , setIsLoadingComplete] = useState(false)

    useEffect( ()=> {
        async function loadResourcesAndDataAsyn(){

            try {
         
              await initWorkouts();
               

              await  Font.loadAsync({

                    "fredoka" : require("../assets/fonts/Fredoka-Bold.ttf"),
                    "fredoka-regular" : require("../assets/fonts/Fredoka-Regular.ttf"),
                    "roboto" : require("../assets/fonts/Roboto-Bold.ttf"),
                    "roboto-regular" : require("../assets/fonts/Roboto-Regular.ttf")
                })
                
            } catch (error) {

                console.log(error);
                
                
            }finally {

             
                
                setIsLoadingComplete(true)
            }

           
        }

        loadResourcesAndDataAsyn();


    }, [])

    return isLoadingComplete;
 
}