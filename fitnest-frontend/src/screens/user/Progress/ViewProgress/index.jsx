import { View, Text, SafeAreaView, Image, Dimensions, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
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
import Carousel, { Pagination } from 'react-native-snap-carousel'
import ProgramCard from '../../../../components/ProgramCard'
import { Entypo } from "react-native-vector-icons";
import { UserContext } from '../../../../stores/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PushNotificationsComponent from '../../../../../notifications'
import { AntDesign } from "@expo/vector-icons";
import Calories from '../Calories'
import Sleeping from '../Sleeping'
import getPrograms from '../../../../services/user/getPrograms'
import useWaterHistory from '../../../../services/user/getWaterHistory'
import getWeightAxios from '../../../../services/user/getWeight'
import Loader from '../../../../components/Loader'
import getPersonalPlan from '../../../../services/user/getPersonalPlan'
import getPrograms from '../../../../services/user/getPrograms'

const ViewProgress = ({ navigation }) => {
    const isCarousel = React.useRef(null)
    const [personalPlans, setPersonalPlans] = useState([])
    const SLIDER_WIDTH = Dimensions.get('window').width
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)
    const [index, setIndex] = useState(0)
    const { userData } = useContext(UserContext);
    const [loading, isLoading] = useState(true);
    const [weightArray, setWeightArray] = useState([]);
    const [monthsArray, setMonthsArray] = useState([]);
    const { response, load, error } = useWaterHistory();
    const [expoPushToken, setExpoPushToken] = useState("");
    const [programs, setPrograms] = useState([])
    const getData = async () => {
        const result = await getPersonalPlan();
        const res = await getPrograms();
        if (result.success || res.success) {
            isLoading(false)
            setPersonalPlans(result.data);
            setPrograms(res.data)
        }
    }

    useEffect(() => {
        getData()

        if (weightArray.length == 0) {
            getWeight()
        }
        const timeId = setTimeout(() => {
            isLoading(true)
        }, 10000);
        clearTimeout(timeId)
    }, [])

    let data = {
        labels: monthsArray,
        datasets: [
            {
                data: weightArray,
                color: (opacity = 1) => `rgba(134, 125, 234, ${opacity})`,
            }
        ],
    };

    

    const renderItem = ({ item }) => (
        <ProgramCard
            id={item.id}
            title={item.title}
            image={item.image}
            num_weeks={item.num_weeks}
            personal_plan={true} />
    )
    // send notification function
    const sendNotification = async () => {
        const pushToken = await AsyncStorage.getItem('push_token')
        const message = {
            to: pushToken,
            sound: "default",
            title: `Stay Hydrated`,
            body: `Don't forget to drink water every two hours ...`
        };

        await fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Accept-encoding": "gzip, deflate",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        });
    };

    const start = 13 * 60 + 5;
    const end = 12 * 60 + 17;
    const dateNow = new Date();
    const now = dateNow.getHours() * 60 + dateNow.getMinutes();

    if (start <= now && now <= end)
        sendNotification();

    const getWeight = async () => {
        try {
            const weightData = await getWeightAxios();
            if (weightData.success) {
                do {
                    weightData.data.map(({ weight }) => (weightArray.push(weight)))
                    weightData.data.map(({ created_at }) => (monthsArray.push(parseInt(parseInt(new Date(created_at).getMonth()) + 1) + `/` + new Date(created_at).getDate())))
                    console.log(weightArray)
                    setWeightArray(weightArray.slice(weightArray.length - 5, weightArray.length))
                    setMonthsArray(monthsArray.slice(weightArray.length - 5, weightArray.length))
                    console.log(monthsArray)

                } while (weightArray.length == 0)
            }
        } catch (error) {
            console.log(error)
        }

    }


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

                    <View style={{ backgroundColor: colors.white, paddingBottom: '20%', height: 700 }}>
                    <Text style={[style.subtitle, {marginLeft: '7%'}]}>Suggested Plans</Text>
                    <Carousel
                        layout="tinder"
                        ref={isCarousel}
                        data={programs}
                        renderItem={renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        onSnapToItem={(index) => setIndex(index)}
                    />
                    <Pagination
                        dotsLength={programs.length}
                        activeDotIndex={index}
                        carouselRef={isCarousel}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            backgroundColor: colors.purple
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={1}
                        tappableDots={true}
                    />
                    <View style={{
                        paddingLeft: '5%',
                        paddingRight: '5%',
                    }}>
                        
                    </View>
                    
                    <View style={{
                        paddingLeft: '5%',
                        paddingRight: '5%',
                    }}>
                        <TouchableOpacity style={styles.barContainer} onPress={() => { navigation.navigate('MealStack') }}>
                            <Text style={styles.titleLabel}>Suggested Meals</Text>
                            <Entypo name={"controller-play"} size={35} color={colors.purple} style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>

                    <PushNotificationsComponent
                        expoPushToken={expoPushToken}
                        setExpoPushToken={setExpoPushToken}
                    />
                </View>
            </ScrollView>
        </>



    )
}

export default ViewProgress