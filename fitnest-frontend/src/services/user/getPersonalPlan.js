import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../variables/global";

const getPersonalSteps = async () => {
    const token = await AsyncStorage.getItem('token')
    try {
        const res = await axios({
            
            method: 'GET',
            url: `${BASE_URL}/personal_plans`,
            headers: { 'Authorization': 'Bearer ' + token },
        })
  
        return { success: true, data: res.data['plans'] }
    }catch (error) {
        console.log(error.response.data)
        return { success: false, error: error }
    }
}

export default getPersonalSteps;