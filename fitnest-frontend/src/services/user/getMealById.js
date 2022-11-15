import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../variables/global';

const useGetMeal = ({ id }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const getMeals = () => {

        axios({
            method: 'GET',
            url: `${BASE_URL}/meals/${id}`,
            headers: { 'Content-Type': 'multipart/form-data;' },
        }).then(response => {
            setResponse(response.data)
            console.log(response.data)
            setloading(false)
        }).catch((err) => {
            setError(err)
        })
        
    }
    useLayoutEffect(() => {
        getMeals();
    }, [response, id, error, loading]);

    return { response, error, loading };
};

export default useGetMeal;