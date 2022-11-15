import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const addIngredient = async (ingredient) => {

    const data = {
        ingredient: ingredient,
    };
    const token = await AsyncStorage.getItem('token');
    await axios({
            headers:{'Authorization':'Bearer '+ token},
            method:'POST',
            url: `${BASE_URL}/add_ingredient`,
            data:data,
    })
    .then(function (response) {
        Alert.alert('Added Successfully! ')
        return true
    })
    .catch(function (error) {
        console.log(error.message)
        Alert.alert('Not added ')
        return false
    });
}

export default addIngredient;