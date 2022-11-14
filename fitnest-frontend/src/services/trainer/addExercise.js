import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const addExercise = async (exercise) => {

    const data = {
        title: exercise.title,
        description: exercise.description,
        image: exercise.image,
        time: exercise.time
    };
    const token = await AsyncStorage.getItem('token')
    axios({
            headers:{'Authorization':'Bearer '+ token},
            method:'POST',
            url: `${BASE_URL}/add_exercise`,
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

export default addExercise;