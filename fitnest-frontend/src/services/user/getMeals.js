import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../variables/global';

const useAxios = ({category}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    
    const getMeals = () => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/meals/category/${category}`,
        }).then(response => {
            setResponse(response.data['meals'])
            setloading(false)
        }).catch((err) => {
            setError(err)
        })
    }
    useLayoutEffect(() => {
        getMeals();
    }, [response, category, error, loading]);

    return { response, error, loading };
};

export default useAxios;