import { View, Text, SafeAreaView, Dimensions, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import GridCard from '../../../../components/GridCard'
import colors from '../../../../constants/colors'
import { style } from '../../../../styles/style'
import Header from '../../../../components/Header'
import Search from '../../../../components/Search'
import { Card } from 'react-native-paper';
import { FontAwesome5 } from "react-native-vector-icons";
import {
    LineChart,
} from "react-native-chart-kit";
import styles from './style'
import { UserContext } from '../../../../stores/UserContext'
import { AntDesign } from "@expo/vector-icons";
import Calories from '../Calories'
import Sleeping from '../Sleeping'
import useWaterHistory from '../../../../services/user/getWaterHistory'
import Loader from '../../../../components/Loader'

const ViewProgress = ({ navigation }) => {

    const { userData } = useContext(UserContext);
    const [loading, isLoading] = useState(true);
    const [weightArray, setWeightArray] = useState([]);
    const { response, load, error } = useWaterHistory();


    return (
        <>
            <ScrollView>
                <SafeAreaView style={style.mainContainer}>
                    <Header text={"My Activities"} image={userData.image} />
                    <Search />

                    <View style={styles.row}>
                        <Sleeping />
                        {/* Water Consumption card to navigate to the page */}
                        <GridCard
                            color={colors.lighterPurple}
                            shadowColor={colors.green}
                            title={"Water"}
                            image={require('../../../../../assets/images/drop.png')}
                            water={response}
                            onPress={() => { navigation.navigate('WaterConsumption') }}
                        />

                    </View>

                    <Calories />
                    <Card style={[styles.item, { backgroundColor: colors.lighterGreen, padding: 0 }]} onPress={() => { navigation.navigate('Weight') }}>
                        <View style={[styles.row, { padding: '5%' }]}>
                            <View style={styles.row}>
                                <Text style={[styles.titleLabel, { marginRight: 7 }]}>Weight</Text>
                                <FontAwesome5
                                    name="weight-hanging"
                                    size={20}
                                    color={colors.purple} />
                            </View>

                            <AntDesign name="plus" size={30} color={colors.purple} style={{ marginRight: '5%', marginBottom: '10%', }} />
                        </View>
                        {weightArray.length == 0 || loading == true ? (
                            <Loader />
                        ) : (
                            <>
                                <LineChart
                                    data={data}
                                    width={350}
                                    chartConfig={{
                                        backgroundColor: colors.lighterGreen,
                                        backgroundGradientFrom: colors.lighterGreen,
                                        backgroundGradientTo: colors.lighterGreen,
                                        decimalPlaces: 0,
                                        color: (opacity = 1) => `rgba(134, 123, 234, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(134, 125, 234, ${opacity})`,
                                        style: {
                                            borderRadius: 16,
                                        },
                                        withInnerLines: false
                                    }}

                                    height={210}

                                />
                            </>
                        )}
                    </Card>

                </SafeAreaView>
            </ScrollView>
        </>



    )
}

export default ViewProgress