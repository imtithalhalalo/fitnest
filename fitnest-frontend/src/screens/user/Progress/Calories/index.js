import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../../constants/colors'
import { Card } from 'react-native-paper';
import styles from './style'
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FontAwesome5, MaterialCommunityIcons } from "react-native-vector-icons";
const Calories = () => {
    const [userInfo, setUserInfo] = useState({});
    const [remaining, setRemaining] = useState(0)
    const [percentage, setPercentage] = useState(0);


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
                        <TouchableOpacity style={styles.iconTitle} onPress={() => setExerciseModalVisibility(true)}>
                            <FontAwesome5
                                name="fire"
                                size={20}
                                color={colors.purple} />
                            <Text style={styles.text}>Exercise</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Card >
    )
}

export default Calories