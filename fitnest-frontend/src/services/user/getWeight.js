import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../variables/global';

const getWeightAxios = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
        const data = await axios({
            method: 'GET',
            url: `${BASE_URL}/get_weight`,
            headers: { 'Authorization': 'Bearer ' + token },
        })
        return { data: data.data, success: true}

    } catch (err) {
        return { success: false, error: err }
    }
}

export default getWeightAxios;