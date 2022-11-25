import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const addPersonalPlan = async (plan) => {

    const data = {
        title: plan.title,
        num_weeks: plan.num_weeks,
        ext: plan.ext,
        image: plan.image,
        user_id: plan.user_id
    };
    const token = await AsyncStorage.getItem('token');
    await axios({
            headers:{'Authorization':'Bearer '+ token},
            method:'POST',
            url: `${BASE_URL}/add_program`,
            data:data,
    })
    .then(function () {
        Alert.alert('Added Successfully! ')
        return true
    })
    .catch(function (error) {
        console.log(error)
        Alert.alert('Try again! ')
        return false
    });
}

export default addPersonalPlan;