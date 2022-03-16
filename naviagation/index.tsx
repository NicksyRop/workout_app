import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import TestScreen from "../screens/TestScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





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
        <Stack.Screen name="Test" component={TestScreen} />
       
    </Stack.Navigator>

    )
}

const BottomTab = createBottomTabNavigator()
function BottomTabNavigator (){

    return(

      <BottomTab.Navigator initialRouteName="Home">
          <BottomTab.Screen  name="Home" component={HomeScreen}/>
          <BottomTab.Screen  name="Planner" component={PlannerScreen}/>
      </BottomTab.Navigator>


    )
}