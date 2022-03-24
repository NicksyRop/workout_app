import React from "react";
import {Text , Pressable } from "react-native";



export function PressableText ({text , onPress} : any) {



    return (

        <Pressable>
       <Text onPress={onPress} style={{ textDecorationLine : "underline"}}>{text}</Text>
     </Pressable>
    )
}