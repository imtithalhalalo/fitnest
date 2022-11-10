import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../constants/colors";
import { StyleSheet } from "react-native";
import React, { useRef } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import TrainerProfileStack from "./ProfileStack/TrainerProfileStack";
import TrainerChatStack from "./ChatStack/TrainerChatStack";

const BottomTabsTrainer = () => {

  const ref = useRef(null);

  const onClick = () => {
    ref.current.present();
  };

  const BottomTabsNav = createBottomTabNavigator();

  return (

    <>

        <BottomTabsNav.Navigator
          initialRouteName="ProfileStack"
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar
          }}
        >
          <>
            <BottomTabsNav.Screen
              name="ProfileStack"
              component={TrainerProfileStack}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" size={size} color={color} />
                ),
              }}
            />
            <BottomTabsNav.Screen
              name="TrainerProfileStack"
              component={TrainerProfileStack}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: () => (
                  <FontAwesome name="plus-circle" size={35} color={colors.purple} onPress={onClick} />
                ),
              }}
            />
            <BottomTabsNav.Screen
              name="TrainerChatStack"
              component={TrainerChatStack}
              options={{
                tabBarLabel: "Chat",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="chat"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </>
        </BottomTabsNav.Navigator>
    </>
  )

}
export default BottomTabsTrainer;

const styles = StyleSheet.create({

  tabBar:{
    borderTopRadius:10,
    width:'100%',
    position:'absolute',
},
});