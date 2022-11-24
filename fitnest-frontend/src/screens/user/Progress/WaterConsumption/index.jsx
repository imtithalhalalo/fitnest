import { Dimensions, SafeAreaView, Text, TouchableOpacity, View, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../../../../components/Button'
import {
  BarChart,
} from "react-native-chart-kit";
import colors from '../../../../constants/colors';
import { style } from '../../../../styles/style';
import Header from '../../../../components/Header';
import styles from './style';
import getWaterIntake from '../../../../services/user/getWaterStats';
import Loader from '../../../../components/Loader';
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../../../variables/global';
import Input from '../../../../components/Input';

const WaterConsumption = ({ navigation }) => {
  const [waterArray, setWaterArray] = useState([]);
  const [daysArray, setDaysArray] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customAmount, setCustomAmount] = useState(0);

  //function to display day of the week as string
  let dayOfTheWeek = (timestamp) => {
    const weekday = ["S", "M", "T", "W", "T", "F", "S"];
    return weekday[new Date(timestamp).getDay()];
  };

  //function to get water intake and add data to array
  const getWaterConsumption = async () => {
    const waterData = await getWaterIntake();
    
    if (waterData.success) {
      console.log(waterData)
      do {
        setWaterArray([])
        waterData.data.map(({ water_intake }) => (waterArray.push(water_intake)))
        waterData.data.map(({ created_at }) => (daysArray.push(dayOfTheWeek(new Date(created_at)))))

        setWaterArray(waterArray)
        setDaysArray(daysArray)
      } while (waterArray.length == 0)
    }

  }
  const addWater = async (amount) => {
    const token = await AsyncStorage.getItem('token');
    try {
      await axios({
        headers: { 'Authorization': 'Bearer ' + token },
        method: 'POST',
        url: `${BASE_URL}/add_water_intake`,

        data: {
          water_intake: amount,
        }
      })
      setLoading(true)
      const timeId = setTimeout(() => {
        setLoading(true)
      }, 50000);
      clearTimeout(timeId)
    } catch (err) {
      console.log(err.response.data)
      return { success: false, error: err }
    }

    try {
      setLoading(true)
      Alert.alert('Added Successfully');

      setModalVisibility(!modalVisibility)
      setLoading(false)

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (waterArray.length == 0) {
      getWaterConsumption()
      const timeId = setTimeout(() => {
        setLoading(true)
      }, 50000);
      clearTimeout(timeId)
    }
  }, [])
  let data = {
    labels: daysArray,
    datasets: [
      {
        data: waterArray
      }
    ]
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ marginLeft: '5%' }}>
          <Header text={"Water Consumption"} back={"back"} />
        </View>
        {
          waterArray.length == 0 || loading ? (
            <Loader />
          ) : (
            <>
              <View style={{ marginTop: '20%' }}>
                <TouchableOpacity onPress={() => setModalVisibility(true)}>
                  <Text style={[style.secondaryText, { marginBottom: '10%' }]}><AntDesign name="plus" size={18} color={colors.purple} style={{ marginRight: '5%', marginBottom: '10%', }} /> Add Water Amount</Text>
                </TouchableOpacity>
                <Text style={styles.label}>Last 7 days</Text>
                <BarChart
                  data={data}
                  height={300}
                  verticalLabelRotation={30}
                  style={{ backgroundColor: colors.white, borderRadius: 15 }}
                  width={Dimensions.get('window').width}
                  chartConfig={{
                    backgroundColor: colors.purple,
                    backgroundGradientFrom: colors.purple,
                    backgroundGradientTo: colors.purple,
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      stroke: colors.white
                    }
                  }}
                />
              </View>
            </>
          )
        }

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
                  <Text style={[style.secondaryText, { fontWeight: '500' }]}>Add today's water intake</Text>

                  <View style={style.inputContainer}>
                    <Text style={[style.inputLabel, { textAlign: 'center' }]}>Water ml</Text>
                  </View>
                  <View style={styles.row}>
                    <View style={{ width: '50%' }}>
                      <Button text={"Bottle 500 ml"} onPress={() => { addWater(500) }} />
                    </View>
                    <View style={{ width: '50%' }}>
                      <Button text={"Cup 330 ml"} onPress={() => { addWater(330) }} />
                    </View>
                  </View>
                  <Input handleChange={amount => setCustomAmount(amount)} label={"Custom Amount"} />
                  <Button text={"Save"} onPress={() => { addWater(customAmount) }} />
                </View>
              </View>
            </Modal> : <></>
        }
        <View style={[style.mainContainer, { marginTop: '10%' }]}>
          <Button text={"Go Back"} onPress={() => { navigation.pop() }} />
        </View>
      </SafeAreaView>



    </>


  )
}

export default WaterConsumption