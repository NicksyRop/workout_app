import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async ( key :string , value :any) =>{

    try {
        const stringValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, stringValue)
        
    } catch (error :any) {
        console.log(error.message);
        
        
    }

}

export const getData = async (key : string) =>{
try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    
} catch (error :any) {
    console.log(error.message);
    
    
}

}

export const containsKey =async (key :string) =>{
    try {

        const keys =await AsyncStorage.getAllKeys();
        return keys.includes(key)
        
    } catch (error:any) {
        console.log(error.message);
        
        
    }

}