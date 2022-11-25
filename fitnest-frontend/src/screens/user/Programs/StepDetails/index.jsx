import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header'
import { style } from '../../../../styles/style';
import { useStopwatch } from 'react-timer-hook';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../../components/Button';
import { Entypo, FontAwesome } from "react-native-vector-icons";
import colors from '../../../../constants/colors';
import doneExercise from '../../../../services/user/doneExercise';
import { address } from '../../../../variables/global';
const StepDetails = ({ route }) => {
    const { id, title, image, description, time } = route.params;
    const {
        seconds,
        minutes,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    const handleDone = async () => {
        let data = {
            exercise_id: id,
        }
        await doneExercise(data)
    }
    return (
        <>
            <SafeAreaView style={style.mainContainer}>
                <Header text={title} back="back" />
                {image ? (
                    <Image source={{ uri: `${address}/${image}` }} style={{ width: '100%', height: '30%', marginTop: '7%' }} resizeMode={'contain'} />
                ) : <></>
                }
                <ScrollView style={{ marginBottom: '10%'}} >
                    <Text style={styles.title}>Step Description</Text>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.circle}>
                        <Text style={styles.timer}>{minutes} : {seconds}</Text>
                    </View>
                    <View style={styles.row}>
                        
                        <TouchableOpacity style={styles.column}>
                        <Entypo name={"controller-paus"} onPress={pause} size={45} color={colors.purple } style={{alignSelf: 'center'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.column}>
                        <Entypo name={"controller-play"} onPress={start} size={45} color={colors.purple } style={{alignSelf: 'center'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.column}>
                        <FontAwesome name={"repeat"} onPress={reset} size={40} color={colors.purple } style={{alignSelf: 'center'}}/>
                        </TouchableOpacity>
                    </View>

                    <Button text={ "Mark As Done" } onPress={handleDone}/>
                    
                </ScrollView>
            </SafeAreaView>

        </>

    )
}

export default StepDetails
