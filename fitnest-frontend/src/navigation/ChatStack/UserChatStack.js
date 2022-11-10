import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Chats from "../../screens/user/Chat/Chats";
import Chat from "../../screens/user/Chat/Chat";

const UserChatStack = () => {

    const StackChat = createStackNavigator();

    return (
      <StackChat.Navigator initialRouteName="Chats">
        <StackChat.Screen name="Chats" component={Chats} options={{headerShown: false}}/>
        <StackChat.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
      </StackChat.Navigator>
    );
}
export default UserChatStack;