import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../variables/global';

const useAxios = () => {
    const [res, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    
    const getProfile = () => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/profile`,
        }).then(response => {
            setResponse(response.data['user'])

            setloading(false)
        }).catch((err) => {
            setError(err)
        })
    }
    useLayoutEffect(() => {
        getProfile();
    }, [res, error, loading]);

    return { res, error, loading };
};

export default useAxios;