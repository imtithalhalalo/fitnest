import { Text, View } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React from 'react'
import colors from '../../../constants/colors';
import styles from './style';


const Steps = () => {

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
                        </View>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

export default Steps