import { createStackNavigator } from "@react-navigation/stack";
import ViewProgress from "../screens/user/Progress/ViewProgress";
import WaterConsumption from "../screens/user/Progress/WaterConsumption";
import Weight from "../screens/user/Progress/Weight";

const ProgressStack = () => {

    const StackProgress = createStackNavigator();
    
    return (
      <StackProgress.Navigator initialRouteName="ViewProgress">
        <StackProgress.Screen name="ViewProgress" component={ViewProgress} options={{headerShown: false}}/>
        <StackProgress.Screen name="Weight" component={Weight} options={{headerShown: false}}/>
        <StackProgress.Screen name="WaterConsumption" component={WaterConsumption} options={{headerShown: false}}/>
      </StackProgress.Navigator>
    );
}
export default ProgressStack;
