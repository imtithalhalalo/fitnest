import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Plan from "../screens/user";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../constants/colors";
import HomeStack from "./HomeStack";
import MealStack from "./MealStack";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "react-native-vector-icons";
import UserProfileStack from "./ProfileStack/UserProfileStack";
import UserChatStack from "./ChatStack/UserChatStack";

const BottomTabs = () => {
  const BottomTabsNav = createBottomTabNavigator();
  return (
    <BottomTabsNav.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.lightPurple
      }}
    >
      <>
        <BottomTabsNav.Screen
          name="Landing"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
                name="home" 
                color={color} 
                size={size} />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="UserChatStack"
          component={UserChatStack}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="message"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="Plan"
          component={Plan}
          options={{
            tabBarLabel: "Progress",
            tabBarIcon: ({ color, size }) => (
              <Ionicons 
                name="stats-chart"
                size={size} 
                color={color} />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="MealStack"
          component={MealStack}
          options={{
            tabBarLabel: "Meals",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="heart"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </>
    </BottomTabsNav.Navigator>
  );
}
export default BottomTabs;