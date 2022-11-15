import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "../../screens/user/Profile/EditProfile";
import Profile from "../../screens/user/Profile/ViewProfile";

const UserProfileStack = () => {
    const StackProfile = createStackNavigator();
    return (
        <StackProfile.Navigator>
          <StackProfile.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          <StackProfile.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}}/>
        </StackProfile.Navigator>
      );
}
export default UserProfileStack;