import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../../variables/global';

const updateProfile = async (user) => {
    const data = {
        name: user.name,
        email: user.email,
        phone_num: user.phone_num,
        image: user.image,
        ext: user.ext
    };
    const token = await AsyncStorage.getItem('token')
    try {
        const res = await axios({
            headers:{'Authorization':'Bearer '+ token},
            method:'POST',
            url: `${BASE_URL}/update_profile`,
            data:data,
        })
        Alert.alert('Updated')
        return {success: true, data: res.data['user']}
    }catch (error) {
        return {success: false, error: error}
    }
}

export default updateProfile;