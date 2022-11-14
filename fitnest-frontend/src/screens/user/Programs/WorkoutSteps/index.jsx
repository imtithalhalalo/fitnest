import { SafeAreaView } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import Header from '../../../../components/Header';
import { BASE_URL } from '../../../../variables/global';
import axios from 'axios';
import { style } from '../../../../styles/style';

const WorkoutSteps = ({ route }) => {
  const { program_id, program_name } = route.params;
  const [loading, setLoading] = useState(true)

  const [steps, setSteps] = useState([])

  useLayoutEffect( () => {

    const getSteps = async () => {

      await axios({
        method: 'GET',
        url: `${BASE_URL}/programs/exercise/${program_id}`,
        headers: { 'Content-Type': 'multipart/form-data;' },
      }).then(response => {
        setSteps(response.data['exercise']);
        console.log(response.data)
        setLoading(false)
      }).catch((err) => {
        console.log(err);
      })
    }
    getSteps()

  }, [])
  return (
    <SafeAreaView style={style.mainContainer}>
      <Header text={ program_name + " Exercises"} back={"back"}/>

    </SafeAreaView>
  )
}

export default WorkoutSteps