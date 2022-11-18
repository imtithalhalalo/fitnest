import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../../variables/global';

const getSleepDuration = async () => {
    const token = await AsyncStorage.getItem('token')
    try {
        const res = await axios({
            method: 'GET',
            url: `${BASE_URL}/get_sleep_duration`,
            headers: { 'Authorization': 'Bearer ' + token },
        })
        return res.data['duration']
    } catch (error) {
        return error
    }

}

export default getSleepDuration;