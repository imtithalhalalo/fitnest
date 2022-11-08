import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Splash from "../screens/Splash";

const Stack = createStackNavigator();
const Stacks = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
export default Stacks;