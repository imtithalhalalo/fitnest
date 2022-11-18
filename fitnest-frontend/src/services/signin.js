import axios from 'axios';
import { BASE_URL } from '../variables/global'
const signin = async (user) => {
    
    const data = {
        email: user.email,
        password: user.password,
    };
    try {
        const res = await axios({
            method:'POST',
            url: BASE_URL + '/login',
            data: data,
            headers: { 'Content-Type':'multipart/form-data;' },

        })
        return {success: true, data: res.data}
    }catch (error) {
        return {success: false, error: 'Incorrect email or/and password'}
    }

}

export default signin;