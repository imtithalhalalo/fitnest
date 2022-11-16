import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../variables/global';

const useSavedMeals = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    
    const getMeals = async () => {
        const token = await AsyncStorage.getItem('token');
        axios({
            method: 'GET',
            url: `${BASE_URL}/saved_meals`,
            headers: { 'Authorization':'Bearer '+ token },
        }).then(response => {
            setResponse(response.data['meals'])
            setloading(false)
        }).catch((err) => {
            setError(err.response.data)
        })
    }
    useEffect(() => {
        getMeals();
    }, [response, error, loading]);

    return { response, error, loading };
};

export default useSavedMeals;