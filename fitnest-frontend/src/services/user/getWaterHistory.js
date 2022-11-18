import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../variables/global';

const useWaterHistory = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [load, setloading] = useState(true);
    
    const getWaterHistory = async () => {
        const token = await AsyncStorage.getItem('token');
        axios({
            method: 'GET',
            url: `${BASE_URL}/water_history`,
            headers: { 'Authorization':'Bearer '+ token },
        }).then(response => {
            setResponse(response.data)
            setloading(false)
        }).catch((err) => {
            setError(err)
        })
    }
    useEffect(() => {
        getWaterHistory();
    }, [response, error, load]);

    return { response, error, load };
};

export default useWaterHistory;