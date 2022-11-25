import axios from "axios";
import { BASE_URL } from "../../variables/global";

const getPersonalPlans = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${BASE_URL}/programs/personal_plans`,
        })
        console.log(res.data)
        return { success: true, data: res.data['plans'] }
    }catch (error) {
        console.log(error.response.data)
        return { success: false, error: error }
    }
}

export default getPersonalPlans;