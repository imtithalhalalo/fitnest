import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../variables/global';

const useGetTrainers = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const getTrainers = async () => {
        try {
            const res = await axios({
                method: 'GET',
                url: `${BASE_URL}/chat/trainer`,
                headers: { 'Content-Type': 'multipart/form-data;' },
            })
            setResponse(res.data['trainers'])
            setLoading(false)
        } catch (err) {
            setError(err)
        }
    }

    useLayoutEffect(() => {
        getTrainers();
    }, [response, error, loading]);

    return { response, error, loading };
}

export default useGetTrainers;