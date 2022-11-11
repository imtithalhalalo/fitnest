import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import colors from '../../constants/colors'
import { style } from '../../styles/style'
import { Dropdown } from 'react-native-element-dropdown';
import Button from '../../components/Button';
import Header from '../../components/Header';


const ConnectExerciseToProgram = ({ navigation }) => {
  const [programs, setPrograms] = useState([])
  const [exercises, setExercises] = useState([])
  const [exercise, setExercise] = useState('')
  const [program, setProgram] = useState('')


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
          <Button text={"Connect"} />
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