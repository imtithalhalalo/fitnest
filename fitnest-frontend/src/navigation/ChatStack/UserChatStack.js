import { createStackNavigator } from "@react-navigation/stack";
import { useLayoutEffect } from 'react';
import { StyleSheet } from "react-native";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import Chats from "../../screens/user/Chat/Chats";
import Chat from "../../screens/user/Chat/Chat";

const UserChatStack = ({navigation , route}) => {

    const StackChat = createStackNavigator();
    const routeName = getFocusedRouteNameFromRoute(route);
    
    useLayoutEffect(()=>{
        if (routeName === "Chat"){
            navigation.setOptions({tabBarStyle: styles.hidden});
        }else {
            navigation.setOptions({tabBarStyle: styles.tabBar});
        }
    },[navigation,route])

    return (
      <StackChat.Navigator initialRouteName="Chats">
        <StackChat.Screen name="Chats" component={Chats} options={{headerShown: false}}/>
        <StackChat.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
      </StackChat.Navigator>
    );
}
export default UserChatStack;

const styles = StyleSheet.create({
    tabBar:{
        borderTopRadius:10,
        width:'100%',
        position:'absolute',
    },
    hidden:{
        display:'none'
    }
})