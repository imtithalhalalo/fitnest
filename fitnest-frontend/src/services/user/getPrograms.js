import axios from "axios";
import { BASE_URL } from "../../variables/global";

const getPrograms = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${BASE_URL}/programs/`,
        })
        
        return { success: true, data: res.data['programs'] }
    }catch (error) {
        return { success: false, error: error }
    }
}

export default getPrograms;