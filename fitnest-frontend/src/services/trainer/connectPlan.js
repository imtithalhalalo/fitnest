import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const connectPlanToExercise = async (ids) => {

    const data = {
        plan_id: ids.plan_id,
        exercise_id: ids.exercise_id,
    };

    const token = await AsyncStorage.getItem('token');
    await axios({
            headers:{'Authorization':'Bearer '+ token},
            method:'POST',
            url: `${BASE_URL}/connect_exercise`,
            data:data,
    })
    .then(function (response) {
        console.log(response);
        Alert.alert('Connected Successfully! ')
        return true
    })
    .catch(function (error) {
        console.log(error.response)
        Alert.alert('Try again! ')
        return false
    });
}

export default connectPlanToExercise;