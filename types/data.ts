export type   Difficulty  = "easy" | "normal" | "hard"
export type   ExerciseType  = "break" | "stretch" | "exercise"

export interface Workout {

    name : string,
    duration : number,
    slug : string,
    difficulty : Difficulty,
    sequence : SequenceItem[],
}

export interface SequenceItem {  
    name : string,
    duration : number,
    slug : string,
   type :ExerciseType,
    reps?: number

}