import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import colors from '../../constants/colors'
import { style } from '../../styles/style'
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import { BASE_URL } from '../../variables/global';
import connectExercise from '../../services/trainer/connectExercise';
import Button from '../../components/Button';
import Header from '../../components/Header';


const ConnectExerciseToProgram = () => {
  const [programs, setPrograms] = useState([])
  const [exercises, setExercises] = useState([])
  const [exercise, setExercise] = useState('')
  const [program, setProgram] = useState('')
  let program_id = 0
  
  useLayoutEffect(() => {
    
    const getPrograms = () => {

      axios({
        method: 'GET',
        url: `${BASE_URL}/programs`,
        headers: { 'Content-Type': 'multipart/form-data;' },
      }).then(response => {
        setPrograms(response.data['programs'])
      }).catch((err) => {
        console.log(err);
      })
    }

    const getExercises = () => {

      axios({
        method: 'GET',
        url: `${BASE_URL}/programs/exercises`,
        headers: { 'Content-Type': 'multipart/form-data;' },
      }).then(response => {
        setExercises(response.data['exercises'])
      }).catch((err) => {
        console.log(err);
      })
    }
    getPrograms()
    getExercises()
  }, [])


  return (
    <>
      <SafeAreaView style={style.mainContainer}>
        <Header text={"Exercise To Program "} back="back"/>

        <View style={{ marginTop: '30%', marginBottom: '30%' }}>
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
              onChange={item => {
                setProgram(item.id);
                program_id = item.id
                console.log(program_id);
              }}
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
              onChange={item => {
                setExercise(item.id);
                console.log(exercise);
              }}
            />
          </View>
          

      </View>
          <Button text={"Connect"} onPress={async () => {
            let data = {
              program_id: program,
              exercise_id: exercise,
            }
            console.log(data.program_id)
            await connectExercise(data)

          }}/>
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
    width: '100%',
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