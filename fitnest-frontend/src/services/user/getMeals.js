import axios from "axios";
import { BASE_URL } from "../../variables/global";

const getMeals = async (category) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${BASE_URL}/meals/category/${category}`,
        })
        
        return {success: true, data: res.data['meals']}
    }catch (error) {
        return {success: false, error: error}
    }
}

export default getMeals;