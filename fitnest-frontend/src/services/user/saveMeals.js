import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const saveMeal = async (meal) => {
    
    const data = {
        meal_id: meal.meal_id,
    };
    const token = await AsyncStorage.getItem('token');
    axios({
            headers: { 'Authorization':'Bearer '+ token },
            method: 'POST',
            url: `${BASE_URL}/save_meal`,
            data: data,
    })
    .then(function () {
        Alert.alert('Saved Successfully! Check your saved meals')
    })
    .catch(function () {
        Alert.alert('Try again! ')
    });
}

export default saveMeal;