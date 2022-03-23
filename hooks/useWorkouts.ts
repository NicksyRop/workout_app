import { useState, useEffect } from "react"
import { getWorkouts } from "../storage/workout"
import { Workout } from "../types/data"
import { useIsFocused } from "@react-navigation/native"




export const useWorkouts = () =>{


    const [workouts , setWorkouts] = useState<Workout []>([])
    // hook to check if you are currently on page or leaving the page
    const isFocused = useIsFocused()

    useEffect( ()=>{
   
     async function getData(){
       const workouts = await getWorkouts()
       setWorkouts(workouts)
   
     }

     //only fetch data when is focus is true
     if(isFocused){
        getData();

     }
   
    
     
   
     // call the function evertime there is a change in focus
   
    },[isFocused])

    return workouts;
}