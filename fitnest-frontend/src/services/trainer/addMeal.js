import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL, TOKEN } from '../../variables/global';

const addMeal = async (meal) => {

    const data = {
        title: meal.title,
        image: meal.image,
        calories: parseInt(meal.calories),
        fats: parseInt(meal.fats),
        protein: parseInt(meal.protein),
        category: meal.category,
        ingredients: meal.ingredients
    };

    const token = await AsyncStorage.getItem('token');
    axios({
            headers:{'Authorization':'Bearer '+ token},
            method:'POST',
            url: `${BASE_URL}/add_meal`,
            data:data,
    })
    .then(function (response) {
        Alert.alert('Added Successfully! ')
    })
    .catch(function (error) {
        console.log(error)
        Alert.alert('Try again! ')
    });
}

export default addMeal;