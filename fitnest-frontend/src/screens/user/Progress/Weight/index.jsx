import { SafeAreaView, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Button from '../../../../components/Button'
import colors from '../../../../constants/colors';
import Header from '../../../../components/Header';
import styles from './style';
import {
  LineChart,
} from "react-native-chart-kit";
import { UserContext } from '../../../../stores/UserContext';
import { style } from '../../../../styles/style';
import { FontAwesome5 } from "react-native-vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Loader from '../../../../components/Loader';
const Weight = ({ navigation }) => {

  const [weightArray, setWeightArray] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const { userData } = useContext(UserContext);
  const [modalVisibility, setModalVisibility] = useState(false);
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
      </SafeAreaView>
    </>


  )
}

export default Weight