import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
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
      <SafeAreaView style={styles.container}>
        <View style={styles.bar}>
          <TouchableWithoutFeedback onPress={() => { navigation.pop() }}>
            <EvilIcons name="arrow-left" size={50} color={colors.purple} />
          </TouchableWithoutFeedback>
          <Text style={{ fontSize: 24, fontWeight: '500' }}>Exercise To Program </Text>
        </View>

        <View style={{ marginTop: '30%' }}>
          <Text style={[{ textAlign: 'center', fontSize: 20 }]}>Choose Plan</Text>
          <View style={[style.inputContainer, { alignItems: "center" }]}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
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
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
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

const styles = StyleSheet.create({
  bar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '10%'
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'flex-start',
    padding: '10%'
  },
  textStyle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center"
  },
  dropdown: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 15,
    padding: 10,
    width: 330,
  },
  placeholderStyle: {
    fontSize: 18,
  },
  selectedTextStyle: {
    fontSize: 18,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 20,
  },
  inputContainer: {
    marginVertical: 1,
    width: '80%',
    marginBottom: '5%'
  },
})