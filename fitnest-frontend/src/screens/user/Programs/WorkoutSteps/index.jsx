import { SafeAreaView, FlatList } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import Header from '../../../../components/Header';
import { BASE_URL } from '../../../../variables/global';
import ExerciseCard from '../../../../components/ExerciseCard';
import axios from 'axios';
import EmptyState from '../../../../components/EmptyState';
import { style } from '../../../../styles/style';
import Loader from '../../../../components/Loader';

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

      {
        loading ?
          <Loader />
          :
          steps.length == 0 ? (
            <EmptyState image={require("../../../../../assets/images/gym.png")} description={"This section will contain all steps for this program "} title={"No Steps"}/>
          ) :
            <FlatList
              data={steps}
              keyExtractor={item => item.id}
              contentContainerStyle={{ paddingBottom: 200 }}
              renderItem={
                ({ item }) =>
                  <ExerciseCard
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    time={item.time}
                    description={item.description} />}
            />
      }
    </SafeAreaView>
  )
}

export default WorkoutSteps