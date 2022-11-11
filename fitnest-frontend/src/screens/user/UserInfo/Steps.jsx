import { Text, View, TextInput } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React, { useState } from 'react'
import colors from '../../../constants/colors';
import { style } from '../../../styles/style';
import ButtonToggleGroup from 'react-native-button-toggle-group';
import styles from './style';


const Steps = () => {

    const [gender, setGender] = useState('Female');


    //style progress steps
    const progressSteps = {
        activeStepIconBorderColor: colors.purple,
        activeLabelColor: colors.purple,
        completedStepIconColor: colors.purple,
        progressBarColor: colors.lightPurple,
        completedProgressBarColor: colors.purple,
        disabledStepIconColor: colors.lightPurple,
    }

    return (
        <View style={[{ paddingTop: 40, backgroundColor: colors.white, flex: 1 }]}>
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
                        <Text style={styles.question}>How old are you?</Text>
                        <TextInput
                            style={[style.input, { alignSelf: 'center', fontSize: 18, marginTop: '5%', width: '90%' }]}
                            onChangeText={age => setAge(age)} />
                    </View>

                </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

export default Steps