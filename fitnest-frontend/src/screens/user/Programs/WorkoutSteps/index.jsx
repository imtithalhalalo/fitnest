import { SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../../components/Header';
import ExerciseCard from '../../../../components/ExerciseCard';
import EmptyState from '../../../../components/EmptyState';
import { style } from '../../../../styles/style';
import Loader from '../../../../components/Loader';
import getSteps from '../../../../services/user/getSteps';
import getPersonalSteps from '../../../../services/user/getPersonalPlan';
import getExercises from '../../../../services/user/getExercise';

const WorkoutSteps = ({ route }) => {
  const { program_id, program_name, personal_plan } = route.params;

  const [steps, setSteps] = useState([])

  const [loading, isLoading] = useState(true);

  const getData = async () => {
    if (personal_plan) {
      const result = await getExercises(program_id);
      console.log(result)
      if (result.success) {
        isLoading(false)
        setSteps(result.data);
        
      }
    } else {
      const result = await getSteps(program_id);
      console.log(result.data)
      if (result.success) {
        isLoading(false)
        setSteps(result.data);
      }
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <SafeAreaView style={style.mainContainer}>
      <Header text={program_name} back={"back"} />

      {
        loading ?
          <Loader />
          :
          steps.length == 0 ? (
            <EmptyState image={require("../../../../../assets/images/gym.png")} description={"This section will contain all steps for this program "} title={"No Steps"} />
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