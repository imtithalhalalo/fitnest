import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const addCalories = async (user) => {

    const data = {
        remaining_calories: user.remaining_calories,
    };
    const token = await AsyncStorage.getItem('token');
    try {
        const res = await axios({
            headers: { 'Authorization': 'Bearer ' + token },
            method: 'POST',
            url: `${BASE_URL}/remaining_calories`,
            data: data,
        })
        return res.data
    }catch (err) {
        Alert.alert('Try again! ')
    }
    
}

export default addCalories;