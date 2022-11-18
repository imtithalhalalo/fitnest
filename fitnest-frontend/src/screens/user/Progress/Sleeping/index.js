import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { style } from '../../../../styles/style'
import colors from '../../../../constants/colors'
import GridCard from '../../../../components/GridCard'
import styles from './style'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome } from "@expo/vector-icons";

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
                                <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20 }}>
                                    <FontAwesome name={"close"} size={30} color={colors.purple} />
                                </TouchableOpacity>

                                <View style={[styles.row, styles.btnHoursContainer]}>
                                    <Text style={style.inputLabel}>Went to bed</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.hoursBtn}>{`${sleepHour}h ${sleepMin}m`}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.row, styles.btnHoursContainer]}>
                                    <Text style={style.inputLabel}>Woke Up</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.hoursBtn}>{`${wokeUpHour}h ${wokeUpMin}m`}</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.btnLabel}>Get Duration </Text>
                                </TouchableOpacity>

                                
                                <Text style={[styles.average]}>{`${HoursDuration}h ${MinDuration}m`}</Text>
                                <TouchableOpacity style={style.primaryBtn}>
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
            />
            <DateTimePickerModal
                isVisible={isWokeUpPickerVisible}
                mode="time"
            />
        </>

    )
}


export default Sleeping