import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Splash from "../screens/Splash";
import BottomTabs from "./UserTabs";
import BottomTabsTrainer from "./TrainerTabs";
import AddMeal from "../screens/trainer/AddMeal";
import AddPlan from "../screens/trainer/AddPlan";
import AddStep from "../screens/trainer/AddStep";
import Steps from "../screens/user/UserInfo/Steps";
import ConnectExerciseToProgram from "../screens/trainer/ConnectSteps";

const Stack = createStackNavigator();
const Stacks = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="AddPlan" component={AddPlan} />
          <Stack.Screen name="AddStep" component={AddStep} />
          <Stack.Screen name="ConnectExerciseToProgram" component={ConnectExerciseToProgram} />
          <Stack.Screen name="AddMeal" component={AddMeal} />
          <Stack.Screen name="Steps" component={Steps} />
        </Stack.Navigator>
    );
}
export default Stacks;