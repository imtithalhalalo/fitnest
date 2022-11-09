import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import Chats from "../../screens/trainer/Chat/Chats";
import Chat from "../../screens/trainer/Chat/Chat";


const TrainerChatStack = () => {

    const StackChat = createStackNavigator();
    
    return (
      <StackChat.Navigator initialRouteName="Chats">
        <StackChat.Screen name="Chats" component={Chats} options={{headerShown: false}}/>
        <StackChat.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
      </StackChat.Navigator>
    );
}
export default TrainerChatStack;