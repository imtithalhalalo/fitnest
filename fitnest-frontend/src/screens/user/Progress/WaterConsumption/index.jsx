import { Dimensions, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../../../../components/Button'
import {
  BarChart,
} from "react-native-chart-kit";
import colors from '../../../../constants/colors';
import { style } from '../../../../styles/style';
import Header from '../../../../components/Header';
import styles from './style';
import Loader from '../../../../components/Loader';
import { AntDesign } from "@expo/vector-icons";


const WaterConsumption = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  let data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        data: [60, 90, 70, 50, 80]
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
          data.length == 0 || loading ? (
            <Loader />
          ) : (
            <>
              <View style={{ marginTop: '20%' }}>
                <TouchableOpacity>
                  <Text style={[style.secondaryText, { marginBottom: '10%' }]}><AntDesign name="plus" size={18} color={colors.purple} style={{ marginRight: '5%', marginBottom: '10%', }} /> Add Water Amount</Text>
                </TouchableOpacity>

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
        <View style={[style.mainContainer, { marginTop: '10%' }]}>
          <Button text={"Go Back"} onPress={() => { navigation.pop() }} />
        </View>
      </SafeAreaView>



    </>


  )
}

export default WaterConsumption