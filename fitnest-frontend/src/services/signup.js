import axios from 'axios';
import { BASE_URL } from '../variables/global'
const SignUp = async (user) => {
    
    const data = {
        name: user.name,
        email: user.email,
        password: user.password,
    };
    await axios({
            method:'POST',
            url: BASE_URL + '/register',
            data:data,
            headers: { 'Content-Type':'multipart/form-data;' },
    })
    .catch(function (error) {
        console.log(error)
    });
}

export default SignUp;