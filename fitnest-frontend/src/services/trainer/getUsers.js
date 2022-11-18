import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../variables/global';

const useGetUsers = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const res = await axios({
                method: 'GET',
                url: `${BASE_URL}/chat/user`,
                headers: { 'Content-Type': 'multipart/form-data;' },
            })
            setResponse(res.data['users'])
            setLoading(false)
        } catch (err) {
            setError(err)
        }
    }

    useLayoutEffect(() => {
        getUsers();
    }, [response, error, loading]);

    return { response, error, loading };
}

export default useGetUsers;