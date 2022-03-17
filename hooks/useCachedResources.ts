

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'

export default function useCachedResources() {
 
    const [ isLoadingComplete , setIsLoadingComplete] = useState(false)

    useEffect( ()=> {
        async function loadResourcesAndDataAsyn(){

            try {

              await  Font.loadAsync({

                    "fredoka" : require("../assets/fonts/Fredoka-Bold.ttf"),
                    "fredoka-regular" : require("../assets/fonts/Fredoka-Regular.ttf")
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