import { SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header';
import { style } from '../../../../styles/style';

const WorkoutSteps = ({ route }) => {

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header text={"Workout Steps"} />

    </SafeAreaView>
  )
}

export default WorkoutSteps