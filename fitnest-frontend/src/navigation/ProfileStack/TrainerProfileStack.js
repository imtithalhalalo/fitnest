import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "../../screens/trainer/Profile/EditProfile";
import Profile from "../../screens/trainer/Profile/Profile";


const TrainerProfileStack = () => {
    const StackProfile = createStackNavigator();
    return (
        <StackProfile.Navigator>
          <StackProfile.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          <StackProfile.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}}/>
        </StackProfile.Navigator>
      );
}
export default TrainerProfileStack;