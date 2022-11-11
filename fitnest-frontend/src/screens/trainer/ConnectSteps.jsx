import React, { useState } from 'react'
import { Text, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import colors from '../../constants/colors'
import { style } from '../../styles/style'
import { EvilIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';


const ConnectExerciseToProgram = ({ navigation }) => {
  const [programs, setPrograms] = useState([])
  const [exercises, setExercises] = useState([])
  const [exercise, setExercise] = useState('')
  const [program, setProgram] = useState('')


  return (
    <>
      <SafeAreaView>
        <View >
          <TouchableWithoutFeedback onPress={() => { navigation.pop() }}>
            <EvilIcons name="arrow-left" size={50} color={colors.purple} />
          </TouchableWithoutFeedback>
          <Text style={{ fontSize: 24, fontWeight: '500' }}>Exercise To Program </Text>
        </View>

        <View style={{ marginTop: '30%' }}>
          <Text style={[{ textAlign: 'center', fontSize: 20 }]}>Choose Plan</Text>
          <View style={[style.inputContainer, { alignItems: "center" }]}>
            <Dropdown
              data={programs}
              placeholder="Choose Plan"
              labelField="title"
              valueField="id"
              value={program}
            />
          </View>
          <Text style={[{ textAlign: 'center', fontSize: 20, marginTop: '5%' }]}>Choose Exercise</Text>
          <View style={[style.inputContainer, { alignItems: "center" }]}>
            <Dropdown
              data={exercises}
              placeholder="Choose Exercise"
              labelField="title"
              valueField="id"
              value={exercise}
            />
          </View>
          

      </View>

    </SafeAreaView>


    </>

  );
}

export default ConnectExerciseToProgram;