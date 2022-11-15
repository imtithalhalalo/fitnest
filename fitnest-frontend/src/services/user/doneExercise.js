import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const doneExercise = async (exercise) => {
    
    const data = {
        exercise_id: exercise.exercise_id,
    };
    const token = await AsyncStorage.getItem('token');
    axios({
            headers: { 'Authorization':'Bearer '+ token },
            method: 'POST',
            url: `${BASE_URL}/done_exercises`,
            data: data,
    })
    .then(function () {
        Alert.alert('Marked as done')
    })
    .catch(function () {
        Alert.alert('Try again! ')
    });
}

export default doneExercise;