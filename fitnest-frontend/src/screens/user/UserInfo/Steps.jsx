import { Text, View, Alert } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React, { useState } from 'react'
import colors from '../../../constants/colors';
import { style } from '../../../styles/style';
import ButtonToggleGroup from 'react-native-button-toggle-group';
import MapView, { Marker } from 'react-native-maps'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../../variables/global';
import styles from './style';
import Input from '../../../components/Input';

const Steps = ({ navigation }) => {

    const [weightGoal, setWeightGoal] = useState(0);
    const [caloriesGoal, setCaloriesGoal] = useState(0);
    const [height, setHeight] = useState(0);
    const [gender, setGender] = useState('Female');
    const [longitude, setLogitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [age, setAge] = useState(10);


    //style progress steps
    const progressSteps = {
        activeStepIconBorderColor: colors.purple,
        activeLabelColor: colors.purple,
        completedStepIconColor: colors.purple,
        progressBarColor: colors.lightPurple,
        completedProgressBarColor: colors.purple,
        disabledStepIconColor: colors.lightPurple,
    }

    const onSubmit = () => {
        let data = {
            latitude: latitude,
            longitude: longitude,
            gender: gender,
            age: age,
            height: height,
            weight_goal: weightGoal,
            calories_goal: caloriesGoal
        }
        if( height == 0
        || age == 0 
        || weightGoal == 0
        || caloriesGoal == 0
        || latitude == null 
        || longitude == null ) {
            
                Alert.alert('Please enter all fields... ')
            
            }
        const addUserInfo = async () => {

            const token = await AsyncStorage.getItem('token');

            await axios({
                headers: { 'Authorization': 'Bearer ' + token },
                method: 'POST',
                url: `${BASE_URL}/user_info`,
                data: data,
            })
                .then(function (response) {
                    Alert.alert('Added Successfully! ')
                    navigation.navigate('BottomTabs');
                })
                .catch(function (error) {
                    console.log(error)
                    Alert.alert('Please enter your calories and weight goal')
                });
        }
        addUserInfo()
    }

    return (
        <View style={style.mainContainer}>
            <ProgressSteps {...progressSteps}>
                <ProgressStep
                    label=""
                    nextBtnTextStyle={styles.nextBtnTextStyle}
                    nextBtnStyle={styles.nextBtnStyle}
                    previousBtnText="Back">

                    <View style={{ marginTop: '50%' }}>
                        <Text style={styles.question}>Please enter your gender </Text>
                        <View style={{ width: '70%', alignSelf: 'center', marginTop: '5%' }}>

                            <ButtonToggleGroup
                                highlightBackgroundColor={colors.purple}
                                style={{ borderRadius: 10, backgroundColor: colors.lightPurple }}
                                highlightTextColor={'white'}
                                inactiveTextColor={colors.purple}
                                values={['Male', 'Female']}
                                value={gender}
                                onSelect={val => setGender(val)}
                                textStyle={{ fontSize: 20, textAlign: 'center' }}
                            />
                        </View>
                    </View>
                </ProgressStep>
                <ProgressStep
                    label=""
                    nextBtnTextStyle={styles.nextBtnTextStyle}
                    nextBtnStyle={styles.nextBtnStyle}
                    previousBtnTextStyle={{ color: colors.purple, fontSize: 18 }}
                    previousBtnStyle={{ textAlign: 'left', padding: 8 }}
                    previousBtnText="Back">
                    <View style={{ marginTop: '50%' }}>
                        <Input label={"How old are you?"} handleChange={age => setAge(age)} />
                    </View>

                </ProgressStep>

                <ProgressStep
                    label=""
                    nextBtnTextStyle={styles.nextBtnTextStyle}
                    nextBtnStyle={styles.nextBtnStyle}
                    previousBtnTextStyle={{ color: colors.purple, fontSize: 18 }}
                    previousBtnStyle={{ textAlign: 'left', padding: 8 }}
                    previousBtnText="Back">

                    <Text style={styles.question}>Enter Your Location</Text>
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        style={styles.map}
                    >
                        <Marker
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                            }}
                            draggable={true}
                            onDragEnd={(e) => {
                                setLatitude(e.nativeEvent.coordinate.latitude)
                                setLogitude(e.nativeEvent.coordinate.longitude)
                            }}
                        />

                    </MapView>

                </ProgressStep>
                <ProgressStep
                    label=""
                    onSubmit={onSubmit}
                    nextBtnTextStyle={styles.nextBtnTextStyle}
                    nextBtnStyle={styles.nextBtnStyle}
                    previousBtnTextStyle={{ color: colors.purple, fontSize: 18 }}
                    previousBtnText="Back">
                    <View style={{ marginTop: '20%' }}>
                        <Text style={styles.question}>Please enter your: </Text>
                        <Input label={"Calories Goal"} handleChange={caloriesGoal => setCaloriesGoal(caloriesGoal)} keyboardType='number-pad' />
                        <Input label={"Weight Goal"} handleChange={weightGoal => setWeightGoal(weightGoal)} keyboardType='number-pad' />
                        <Input label={"Height"} handleChange={height => setHeight(height)} keyboardType='number-pad' />
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

export default Steps