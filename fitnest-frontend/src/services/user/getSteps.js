import axios from "axios";
import { BASE_URL } from "../../variables/global";

const getSteps = async (program_id) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${BASE_URL}/programs/exercise/${program_id}`,
            headers: { 'Content-Type': 'multipart/form-data;' },
        })
        
        return { success: true, data: res.data['exercise'] }
    }catch (error) {
        return { success: false, error: error }
    }
}

export default getSteps;