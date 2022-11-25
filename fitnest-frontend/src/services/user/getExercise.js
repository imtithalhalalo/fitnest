import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../variables/global";

const getExercises = async (plan_id) => {
    const token = await AsyncStorage.getItem('token')
    try {
        const res = await axios({
            method: 'GET',
            url: `${BASE_URL}/programs/exercise_plan/${plan_id}`,
            headers: { 'Content-Type': 'multipart/form-data;' },
            headers: { 'Authorization': 'Bearer ' + token },
        })
        console.log(res.data)
        return { success: true, data: res.data['exercise'] }
    }catch (error) {
        return { success: false, error: error.response }
    }
}

export default getExercises;