import { getFocusedRouteNameFromRoute } from "@react-navigation/core";
import { createStackNavigator } from "@react-navigation/stack";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import ViewProgress from "../screens/user/Progress/ViewProgress";
import WaterConsumption from "../screens/user/Progress/WaterConsumption";
import Weight from "../screens/user/Progress/Weight";

const ProgressStack = ({route, navigation}) => {

    const StackProgress = createStackNavigator();
    const routeName = getFocusedRouteNameFromRoute(route);
    
    useLayoutEffect(()=>{
        if (routeName === "Weight" || routeName === "WaterConsumption" ){
            navigation.setOptions({tabBarStyle: styles.hidden});
        }else {
            navigation.setOptions({tabBarStyle: styles.tabBar});
        }
    },[navigation,route])
    
    return (
      <StackProgress.Navigator initialRouteName="ViewProgress">
        <StackProgress.Screen name="ViewProgress" component={ViewProgress} options={{headerShown: false}}/>
        <StackProgress.Screen name="Weight" component={Weight} options={{headerShown: false}}/>
        <StackProgress.Screen name="WaterConsumption" component={WaterConsumption} options={{headerShown: false}}/>
      </StackProgress.Navigator>
    );
}
export default ProgressStack;

const styles = StyleSheet.create({
    tabBar:{
        position:'absolute',
        borderTopRadius:10,
        width:'100%',
    },
    hidden:{
        display:'none'
    }
})