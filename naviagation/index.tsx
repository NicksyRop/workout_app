import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import TestScreen from "../screens/TestScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import WorkoutDetailsScreen from "../screens/WorkoutDetailScreen";




export default function Navigator() {

    return(
        <NavigationContainer>
           <NavScreens/>
       
    </NavigationContainer>


    )


}
const Stack = createNativeStackNavigator()
function NavScreens(){

    return(
        <Stack.Navigator >
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown : false}}/>
        <Stack.Screen name="WorkoutDetail" component={WorkoutDetailsScreen} options={{ title : "Workout Info"}} />
       
    </Stack.Navigator>

    )
}

const BottomTab = createBottomTabNavigator()
function BottomTabNavigator (){

    return(

      <BottomTab.Navigator initialRouteName="Home">
          <BottomTab.Screen  name="Home" component={HomeScreen} options={{ tabBarIcon : ({ size ,color})=> <FontAwesome name="home" size={size} color={color} />}} />
          <BottomTab.Screen  name="Planner" component={PlannerScreen}  options={{ tabBarIcon : ({size ,color})=> <Entypo name="add-to-list" size={size} color={color} />}} />
      </BottomTab.Navigator>


    )
}