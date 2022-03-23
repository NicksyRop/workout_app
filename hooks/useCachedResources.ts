

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { getData, storeData ,containsKey } from '../storage'
import data from "../data.json"

export default function useCachedResources() {
 
    const [ isLoadingComplete , setIsLoadingComplete] = useState(false)

    useEffect( ()=> {
        async function loadResourcesAndDataAsyn(){

            try {

                const hasWorksouts = await containsKey("workout-data");

                if(!hasWorksouts){
                    console.log("stoirng data");
                    
                    await storeData("workout-data", data)
                }
               

              await  Font.loadAsync({

                    "fredoka" : require("../assets/fonts/Fredoka-Bold.ttf"),
                    "fredoka-regular" : require("../assets/fonts/Fredoka-Regular.ttf"),
                    "roboto" : require("../assets/fonts/Roboto-Bold.ttf"),
                    "roboto-regular" : require("../assets/fonts/Roboto-Regular.ttf")
                })
                
            } catch (error) {

                console.log(error);
                
                
            }finally {

                const workouts = await getData("workout-data")
                console.log(workouts);
                
                setIsLoadingComplete(true)
            }

           
        }

        loadResourcesAndDataAsyn();


    }, [])

    return isLoadingComplete;
 
}