import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import { style } from '../../../../styles/style'
import colors from '../../../../constants/colors'
import GridCard from '../../../../components/GridCard'
import styles from './style'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FontAwesome } from "@expo/vector-icons";
import axios from 'axios';
import { BASE_URL } from '../../../../variables/global';
const Sleeping = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [isSleepPickerVisible, showSleepPickerVisibility] = useState(false);
    const [isWokeUpPickerVisible, showWokeUpPickerVisibility] = useState(false);


    const [wokeUpHour, setWokeUpHour] = useState(0);
    const [wokeUpMin, setWokeUpMin] = useState(0);

    const [sleepHour, setSleepHour] = useState(0);
    const [sleepMin, setSleepMin] = useState(0);

    const [HoursDuration, setHoursDuration] = useState(0);
    const [MinDuration, setMinDuration] = useState(0);
    const [duration , setDuration] = useState('');

    const showSleepPicker = () => {
        showSleepPickerVisibility(true);
    };

    const showWokeUpPicker = () => {
        showWokeUpPickerVisibility(true);
    };

    const hideHourPicker = () => {
        showSleepPickerVisibility(false);
    };

    const handleSleepConfirm = (date) => {
        setSleepHour(date.getHours())
        setSleepMin(date.getMinutes())
        hideHourPicker();
    };

    const handleWokeUpConfirm = (date) => {
        setWokeUpHour(date.getHours())
        setWokeUpMin(date.getMinutes())
        hideHourPicker();
    };

    //function to calculate the duration between the slept hour and woke up hour for user
    const calculateSleepingHoursDuration = (sleepHour, sleepMin, wokeUpHour, wokeUpMin) => {
        let sleepMinutes = sleepHour * 60 + sleepMin;
        let wokeUpMinutes = wokeUpHour * 60 + wokeUpMin;
        let totalHours = 0;
        let totalMin = 0;
        if (sleepMinutes > wokeUpMinutes) {
            totalHours = Math.floor((sleepMinutes - wokeUpMinutes) / 60);
        } else {
            totalHours = Math.floor((wokeUpMinutes - sleepMinutes) / 60);
        }
        totalMin = totalHours - Math.floor(totalHours)
        totalMin = totalMin.toFixed(1) * 60;
        console.log(totalHours)
        console.log(totalMin)
        setHoursDuration(totalHours)
        setMinDuration(totalMin);
        return { totalHours, totalMin };
    }


    return (
        <>
            {/* Sleeping Card */}
            <GridCard
                color={colors.lighterGreen}
                shadowColor={colors.purple}
                title={"Sleeping"}
                sleeping={true}
                image={require('../../../../../assets/images/moon.png')}
                hours={duration}
                onPress={() => setModalVisibility(true)}
            />
            {/* Sleeping Duration card */}
            {
                modalVisibility ?
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisibility}
                        onRequestClose={() => {
                            setModalVisibility(!modalVisibility);
                        }}
                    >
                        <View style={styles.centered}>
                            <View style={styles.modal}>
                                <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20 }} onPress={() => setModalVisibility(false)}>
                                    <FontAwesome name={"close"} size={30} color={colors.purple} />
                                </TouchableOpacity>

                                <View style={[styles.row, styles.btnHoursContainer]}>
                                    <Text style={style.inputLabel}>Went to bed</Text>
                                    <TouchableOpacity onPress={showSleepPicker}>
                                        <Text style={styles.hoursBtn}>{`${sleepHour}h ${sleepMin}m`}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.row, styles.btnHoursContainer]}>
                                    <Text style={style.inputLabel}>Woke Up</Text>
                                    <TouchableOpacity onPress={showWokeUpPicker}>
                                        <Text style={styles.hoursBtn}>{`${wokeUpHour}h ${wokeUpMin}m`}</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => calculateSleepingHoursDuration(sleepHour, sleepMin, wokeUpHour, wokeUpMin)}>
                                    <Text style={styles.btnLabel}>Get Duration </Text>
                                </TouchableOpacity>

                                
                                <Text style={[styles.average]}>{`${HoursDuration}h ${MinDuration}m`}</Text>
                                <TouchableOpacity style={style.primaryBtn} onPress={addSleepDuration}>
                                    <Text style={style.primaryTextBtn}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </Modal> : <></>
            }

            {/* two pickers for woke up and sleep duration of user */}
            <DateTimePickerModal
                isVisible={isSleepPickerVisible}
                mode="time"
                onConfirm={handleSleepConfirm}
                onCancel={hideHourPicker}
            />
            <DateTimePickerModal
                isVisible={isWokeUpPickerVisible}
                mode="time"
                onConfirm={handleWokeUpConfirm}
                onCancel={hideHourPicker}
            />
        </>

    )
}


export default Sleeping