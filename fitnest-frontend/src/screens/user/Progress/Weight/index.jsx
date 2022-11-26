import { SafeAreaView, Text, View, Modal, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../../../../components/Button'
import colors from '../../../../constants/colors';
import Header from '../../../../components/Header';
import styles from './style';
import getWeightAxios from '../../../../services/user/getWeight';
import {
  LineChart,
} from "react-native-chart-kit";
import { UserContext } from '../../../../stores/UserContext';
import { style } from '../../../../styles/style';
import { FontAwesome5 } from "react-native-vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../../../../variables/global';
import Loader from '../../../../components/Loader';
import { FontAwesome } from "@expo/vector-icons";
import { Dropdown } from 'react-native-element-dropdown';
const Weight = ({ navigation }) => {

  const [weightArray, setWeightArray] = useState([]);
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const { userData } = useContext(UserContext);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [weight, setWeight] = useState(0)
  const [monthsArray, setMonthsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  let data = {
    labels: monthsArray.sort((a, b) => a - b),
    datasets: [
      {
        data: weightArray,
        color: (opacity = 1) => `rgba(134, 125, 234, ${opacity})`,
      }
    ],
  };

  const units = [
    { label: 'Kg', value: 'kg' },
    { label: 'lbs', value: 'lbs' },
  ];
  const [weightUnit, setWeightUnit] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date)
    hideDatePicker();
  };
  const getWeight = async () => {
    const weightData = await getWeightAxios();
    console.log(weightData)
    if (weightData.success) {
      do {
        setWeightArray([])
        weightData.data.map(({ weight }) => (weightArray.push(weight)))
        weightData.data.map(({ created_at }) => (monthsArray.push(parseInt(parseInt(new Date(created_at).getMonth()) + 1) + `/` + new Date(created_at).getDate())))
        console.log(weightArray)
        setWeightArray(weightArray.slice(weightArray.length - 5, weightArray.length))
        setMonthsArray(monthsArray.slice(weightArray.length - 5, weightArray.length + 1))
        console.log(monthsArray)

      } while (weightArray.length == 0)
    }

  }
  useEffect(() => {

    if (weightArray.length == 0) {
      getWeight()
    }
    const timeId = setTimeout(() => {
      setLoading(true)
    }, 10000);
    clearTimeout(timeId)
    console.log(monthsArray)
    console.log(weightArray)
  }, [])

  const addWeight = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      await axios({
        headers: { 'Authorization': 'Bearer ' + token },
        method: 'POST',
        url: `${BASE_URL}/add_weight`,

        data: {
          weight: weight,
          date: date
        }
      })
      setLoading(true)
    } catch (err) {
      console.log(err.response.data)
      return { success: false, error: err }
    }


    Alert.alert('Added Successfully');

    setModalVisibility(!modalVisibility)

    setLoading(false)
    weightArray.reverse().pop()
    weightArray.reverse()
    try {
      setWeightArray([...weightArray, weight])
      setMonthsArray([...monthsArray, parseInt(parseInt(new Date().getMonth()) + 1) + `/` + new Date(created_at).getDate()])
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ marginLeft: '5%' }}>
          <Header text={"Nutrition"} back={"back"} image={userData.image} />
        </View>

        {weightArray.length == 0 || loading == true ? (
          <Loader />
        ) : (
          <>
            <View style={{ marginTop: '30%' }}>

              <View style={[styles.row, { padding: '5%' }]}>

                <View style={styles.row}>
                  <Text style={[styles.titleLabel, { marginRight: 7 }]}>Weight</Text>
                  <FontAwesome5
                    name="weight-hanging"
                    size={20}
                    color={colors.purple} />
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
                <AntDesign name="plus" size={30} color={colors.purple} style={{ marginRight: '5%', marginBottom: '10%', }} onPress={() => setModalVisibility(true)} />
              </View>

            </View>
            <LineChart
              data={data}
              width={430}
              chartConfig={{
                backgroundColor: colors.white,
                backgroundGradientFrom: colors.white,
                backgroundGradientTo: colors.white,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(134, 123, 234, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(134, 125, 234, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                withInnerLines: false
              }}

              height={300}

            />
          </>

        )}

        <View style={[style.mainContainer]}>
          <Button text={"Go Back"} onPress={() => { navigation.pop() }} />
        </View>
        {
          modalVisibility ?
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisibility}
              onRequestClose={() => {
                setModalVisibility(!modalVisibility);
              }}
              avoidKeyboard
            >
              <View style={styles.centered}>
                <View style={styles.modal}>
                  <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20 }} onPress={() => setModalVisibility(false)}>
                    <FontAwesome name={"close"} size={30} color={colors.purple} />
                  </TouchableOpacity>
                  <Text style={[style.secondaryText, { fontWeight: '500' }]}>Add Your Weight</Text>

                  <View style={style.inputContainer}>
                  <View style={styles.row}>
                  <Text style={style.inputLabel}>{`Weight ${weightUnit}`}</Text>
                  <View style={{width: '30%'}}>
                   <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      data={units}
                      placeholder="unit"
                      labelField="label"
                      valueField="value"
                      value={weightUnit}
                      onChange={item => {
                        setWeightUnit(item.value)
                      }}
                    /> 
                  </View>
                    
                  </View>
                    
                    <TextInput
                      style={style.input}
                      onChangeText={weight => setWeight(weight)} />
                  </View>

                  <Button text={"Choose Date"} onPress={showDatePicker} secondary={true}/>
                  
                  <TouchableOpacity
                    style={[style.primaryBtn]}
                    onPress={addWeight}
                  >
                    <Text style={style.primaryTextBtn}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal> : <></>
        }
      </SafeAreaView>
    </>


  )
}

export default Weight