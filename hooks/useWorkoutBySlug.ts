import { useState, useEffect } from "react";
import { getWorkoutBySlug } from "../storage/workout";
import { Workout } from "../types/data";


export const useWorkoutBySlug = (slug : string) =>{



    
  const [ workout , setWorkout] = useState<Workout>();


  useEffect( () =>{

    async function getData() {

      const data = await getWorkoutBySlug(slug);

      setWorkout(data);

      console.log(data);
      
      
    }

    getData()

  },[])


  return workout;
} 