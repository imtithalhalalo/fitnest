import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const updateProfile = async (user) => {

    const data = {
        name: user.name,
        email: user.email,
        phone_num: user.phone_num,
        image: user.image
    };
    const token = await AsyncStorage.getItem('token')
    await axios({
            headers:{'Authorization':'Bearer '+ token},
            method:'POST',
            url: `${BASE_URL}/update_profile`,
            data:data,
    })
    .then(function (response) {
        Alert.alert('Updated')
        return true
    })
    .catch(function (error) {
        console.log(error)
        return false
    });
}

export default updateProfile;