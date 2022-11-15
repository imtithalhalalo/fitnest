import { createStackNavigator } from "@react-navigation/stack";
import Meals from "../screens/user/Meals/Meals";
import MealDetails from "../screens/user/Meals/MealDetails";
import SavedMeals from "../screens/user/Meals/SavedMeals";

const MealStack = () => {

    const StackHome = createStackNavigator();

    return (
      <StackHome.Navigator>
        <StackHome.Screen name="Meal" component={Meals} options={{headerShown: false}}/>
        <StackHome.Screen name="MealDetails" component={MealDetails} options={{headerShown: false}}/>
        <StackHome.Screen name="SavedMeals" component={SavedMeals} options={{headerShown: false}}/>
      </StackHome.Navigator>
    );
}
export default MealStack;