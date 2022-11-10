import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../constants/colors";
import HomeStack from "./HomeStack";
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
      </>
    </BottomTabsNav.Navigator>
  );
}
export default BottomTabs;