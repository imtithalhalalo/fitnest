import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const addProgram = async (program) => {

    const data = {
        title: program.title,
        num_weeks: program.num_weeks,
        image: program.image,
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

export default addProgram;