import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../variables/global';

const updateImage = async (user) => {

    const data = {
        image: user.image,
    };
    const token = await AsyncStorage.getItem('token')
    axios({
            headers:{'Authorization':'Bearer '+ token},
            method:'POST',
            url: `${BASE_URL}/upload_image`,
            data:data,
    })
    .then(function (response) {
        Alert.alert('Added Successfully! ')
        return true
    })
    .catch(function (error) {
        console.log(error)
        Alert.alert('Try again! ')
        return false
    });
}

export default updateImage;