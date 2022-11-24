import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../variables/global';

const useGetMealTips = ({ id }) => {
    const [resp, setResponse] = useState(null);
    const [eror, setError] = useState('');
    const [loads, setloading] = useState(true);

    const getTip = () => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/meals/tip/${id}`,
        }).then(response => {
            setResponse(response.data['tips'])
            console.log(response.data)
            setloading(false)
        }).catch((err) => {
            setError(err)
        })

    }
    useLayoutEffect(() => {
        getTip();
    }, [resp, id, eror, loads]);

    return { resp, eror, loads };
};

export default useGetMealTips;