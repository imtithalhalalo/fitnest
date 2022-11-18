import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import colors from '../../../../constants/colors'
import { Card } from 'react-native-paper';
import styles from './style'
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FontAwesome5, MaterialCommunityIcons } from "react-native-vector-icons";
import { style } from '../../../../styles/style';
import { FontAwesome } from "@expo/vector-icons";
import useUserInfo from '../../../../services/user/getUserInfo';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import addCalories from '../../../../services/user/addCalories';
import CustomModal from '../../../../components/Modal';
const Calories = () => {
    const [foodModalVisibility, setFoodModalVisibility] = useState(false);
    const [exerciseModalVisibility, setExerciseModalVisibility] = useState(false);
    const [calories, setCalories] = useState(0);
    const [caloriesBurned, setCaloriesBurned] = useState(0);
    const [exerciseTime, setExerciseTime] = useState(0);
    const [userInfo, setUserInfo] = useState({});
    const { response } = useUserInfo();
    const [remaining, setRemaining] = useState(0)
    const [percentage, setPercentage] = useState(0);
    const [message, setMessage] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);
    useLayoutEffect(() => {
        if (response !== null) {
            setUserInfo(response);
            
        }
    }, [response]);
    
    const displayMessage = (message) => {
        setMessage(message)
        setModalVisibility(true)
    }
    const addRemainingCalories = async (calories_burned = null, calories = null) => {
        let remaining_calories = parseInt(userInfo.calories_goal)
        console.log(remaining_calories)
        if (calories) {
            console.log(calories)
            remaining_calories = remaining_calories + parseInt(calories);

        } else {

            remaining_calories = remaining_calories - parseInt(calories_burned);

        }
        setRemaining(remaining_calories)
        let data = {
            remaining_calories: remaining_calories,
        }
        await addCalories(data)
        setFoodModalVisibility(false);
        setExerciseModalVisibility(false);
        
        setPercentage(Math.floor((remaining_calories / parseInt(userInfo.calories_goal)) * 100))
        if (percentage == 100) {
            displayMessage('Congratulations reaching your calories goal..')
            setModalVisibility(true)
        }
    }


    return (
        <Card style={styles.item} >
            <Text style={styles.titleLabel}>Calories <Image source={require('../../../../../assets/images/kcal.png')} style={{ width: 28, height: 28, marginLeft: '10%' }} /></Text>
            <View style={{ marginBottom: '10%' }}>
                <Text style={styles.label}>Goal : {userInfo.calories_goal}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.center}>
                    <AnimatedCircularProgress
                        size={120}
                        width={15}
                        duration={2000}
                        fill={100 - parseInt(percentage)}
                        tintColor={colors.green}
                        onAnimationComplete={() => console.log("Completed")}
                        backgroundColor={colors.lightGreen}
                    >
                        {() => <>
                            <Text style={{ color: colors.purple, fontSize: 18 }}>{remaining}</Text>
                            <Text style={{ color: colors.purple, fontSize: 18 }}>Kcal</Text>
                        </>}
                    </AnimatedCircularProgress>
                </View>

                <View style={styles.center}>
                    <View style={styles.column}>
                        <TouchableOpacity style={styles.iconTitle} onPress={() => setFoodModalVisibility(true)}>
                            <MaterialCommunityIcons
                                name="food-apple"
                                size={22}
                                color={colors.purple} />
                            <Text style={styles.text}>Food</Text>
                        </TouchableOpacity>
                        {
                            foodModalVisibility ?
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={foodModalVisibility}
                                    onRequestClose={() => {
                                        setFoodModalVisibility(!foodModalVisibility);
                                    }}
                                    avoidKeyboard
                                >
                                    <View style={styles.centered}>
                                        <View style={[styles.modal, {height: '55%'}]}>
                                            <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20 }} onPress={() => setFoodModalVisibility(false)}>
                                                <FontAwesome name={"close"} size={30} color={colors.purple} />
                                            </TouchableOpacity>
                                            <Text style={[style.secondaryText, { fontWeight: '500' }]}>Add Your Food Calories</Text>
                                            <Input handleChange={calories => setCalories(calories)} keyboardType='number-pad' />
                                            <Button text={"Save"} onPress={() => { addRemainingCalories(calories) }} />
                                        </View>
                                    </View>
                                </Modal> : <></>
                        }
                        <TouchableOpacity style={styles.iconTitle} onPress={() => setExerciseModalVisibility(true)}>
                            <FontAwesome5
                                name="fire"
                                size={20}
                                color={colors.purple} />
                            <Text style={styles.text}>Exercise</Text>
                        </TouchableOpacity>

                        {
                            exerciseModalVisibility ?
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={exerciseModalVisibility}
                                    onRequestClose={() => {
                                        setExerciseModalVisibility(!exerciseModalVisibility);
                                    }}
                                >
                                    <View style={styles.centered}>
                                        <View style={styles.modal}>
                                            <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20 }} onPress={() => setExerciseModalVisibility(false)}>
                                                <FontAwesome name={"close"} size={30} color={colors.purple} />
                                            </TouchableOpacity>
                                            <Text style={[style.secondaryText, { fontWeight: '500' }]}>Create an Exercise </Text>
                                            <Input label={"How long (minutes)"} handleChange={exercise_time => setExerciseTime(exercise_time)} keyboardType='number-pad' />
                                            <Input label={"Calories Burned"} handleChange={calories_burned => setCaloriesBurned(calories_burned)} keyboardType='number-pad' />

                                            <Button text={"Save"} onPress={() => { addRemainingCalories(caloriesBurned) }} />
                                        </View>
                                    </View>
                                </Modal> : <></>
                        }
                    </View>

                </View>
            </View>
            {
                modalVisibility ? (
                    <CustomModal
                        onRequestClose={() => { setModalVisibility(!modalVisibility); }}
                        visible={modalVisibility}
                        error={message}
                        onPress={() => setModalVisibility(!modalVisibility)}
                        text={"Close"} />
                ) : <></>
            }
        </Card >
    )
}

export default Calories