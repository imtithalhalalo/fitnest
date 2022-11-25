import React, { useState, useLayoutEffect, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import colors from '../../constants/colors'
import { style } from '../../styles/style'
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import { BASE_URL } from '../../variables/global';
import connectExercise from '../../services/trainer/connectExercise';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { FontAwesome } from "@expo/vector-icons";
import getPersonalPlans from '../../services/user/getPersonalPlans';
import connectPlanToExercise from '../../services/trainer/connectPlan';

const ConnectExerciseToProgram = () => {
  const [programs, setPrograms] = useState([])
  const [exercises, setExercises] = useState([])
  const [exercise, setExercise] = useState('')
  const [program, setProgram] = useState('')
  const [modalVisibility, setModalVisibility] = useState(false);
  const [personalPlans, setPersonalPlans] = useState([])
  const [personalPlan, setPersonalPlan] = useState([])
  const [programID, setProgramID] = useState(0)
  const getData = async () => {
    const result = await getPersonalPlans();
    if (result.success) {
      console.log(result)
      setPersonalPlans(result.data);

    }
  }
  useEffect(() => {
    getData()
  }, [])
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
        <Header text={"Exercise To Program "} back="back" />

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
                setProgramID(item.id)
                console.log(programID);
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
          if (personalPlan != 0) {
            let data = {
              plan_id: personalPlan,
              exercise_id: exercise,
            }
            console.log(personalPlan)
            await connectPlanToExercise(data)
          } else {
            let data = {
              program_id: program,
              exercise_id: exercise,
            }
            console.log(data.program_id)
            await connectExercise(data)
          }
        }}
         />

        <Button text={"Personal Plan"} secondary={true} onPress={() => { setModalVisibility(true) }} />
        {
          //edit modal
          modalVisibility ?
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisibility}
              onRequestClose={() => {
                setModalVisibility(!modalVisibility);
              }}
            >
              <View style={styles.centered}>
                <View style={styles.modal}>
                  <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20 }} onPress={() => setModalVisibility(false)}>
                    <FontAwesome name={"close"} size={30} color={colors.purple} />
                  </TouchableOpacity>
                  <Text style={[style.secondaryText, { fontWeight: '500' }]}>Choose Personal Plan</Text>
                  <View style={[style.inputContainer, { alignItems: "center" }]}>
                    <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      data={personalPlans}
                      placeholder="Choose Personal Plan"
                      labelField="title"
                      valueField="id"
                      value={personalPlan}
                      onChange={item => {
                        setPersonalPlan(item.id);
                      }}
                    />
                  </View>
                  <Button text={"Add"} onPress={() => { setModalVisibility(false) }} />
                </View>
              </View>
            </Modal> : <></>
        }

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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGrey
  },
  modal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: '5%',
    height: '40%',
    justifyContent: 'center',
    width: '90%',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})