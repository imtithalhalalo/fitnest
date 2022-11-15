import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../variables/global';

const useUserInfo = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    
    const getUserInfo = async () => {
        const token = await AsyncStorage.getItem('token');
        axios({
            method: 'GET',
            url: `${BASE_URL}/get_user_info`,
            headers: { 'Authorization':'Bearer '+ token },
        }).then(response => {
            setResponse(response.data['user_info'])
            setloading(false)
        }).catch((err) => {
            setError(err)
        })
    }
    useEffect(() => {
        getUserInfo();
    }, [response, error, loading]);

    return { response, error, loading };
};

export default useUserInfo;