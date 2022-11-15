import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../variables/global';

const useGetMealIngredients = ({ id }) => {
    const [res, setResponse] = useState(null);
    const [err, setError] = useState('');
    const [load, setloading] = useState(true);

    const getMeal = () => {

        axios({
            method: 'GET',
            url: `${BASE_URL}/meals/ingredient/${id}`,
        }).then(response => {
            setResponse(response.data['ingredients'])
            setloading(false)
        }).catch((err) => {
            setError(err)
        })

    }
    useLayoutEffect(() => {
        getMeal();
    }, [res, id, err, load]);

    return { res, err, load };
};

export default useGetMealIngredients;