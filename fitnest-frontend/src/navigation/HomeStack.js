import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import WorkoutSteps from "../screens/user/Programs/WorkoutSteps";
import StepDetails from "../screens/user/Programs/StepDetails";
import Programs from "../screens/user/Programs/ViewPrograms";
const HomeStack = ({navigation , route}) => {

    const StackHome = createStackNavigator();
    const routeName = getFocusedRouteNameFromRoute(route);

    useLayoutEffect(()=>{
        if (routeName === "WorkoutSteps"){
            navigation.setOptions({tabBarStyle: styles.hiddenTabBar});
        }else {
            navigation.setOptions({tabBarStyle: styles.tabBar});
        }
    },[navigation,route])

    return (
      <StackHome.Navigator>
        <StackHome.Screen name="Programs" component={Programs} options={{headerShown: false}}/>
        <StackHome.Screen name="WorkoutSteps" component={WorkoutSteps} options={{headerShown: false}}/>
        <StackHome.Screen name="StepDetails" component={StepDetails} options={{headerShown: false}}/>
      </StackHome.Navigator>
    );
}
export default HomeStack;

const styles = StyleSheet.create({
    tabBar:{
        borderTopRadius:10,
        width:'100%',
        position:'absolute',
    },
    hiddenTabBar:{
        display:'none'
    }
})