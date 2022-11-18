import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../variables/global';

const useTrainerInfo = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    
    const getTrainerInfo = async () => {
        const token = await AsyncStorage.getItem('token');
        axios({
            method: 'GET',
            url: `${BASE_URL}/get_trainer_info`,
            headers: { 'Authorization':'Bearer '+ token },
        }).then(response => {
            setResponse(response.data['trainer_info'])
            setloading(false)
        }).catch((err) => {
            setError(err)
        })
    }
    useEffect(() => {
        getTrainerInfo();
    }, [response, error, loading]);

    return { response, error, loading };
};

export default useTrainerInfo;