import { Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState, useLayoutEffect } from 'react'
import { FontAwesome5, MaterialIcons } from "react-native-vector-icons";
import colors from '../../../../constants/colors';
import ProfileBox from '../../../../components/ProfileBox';
import { style } from '../../../../styles/style';
import styles from './style';
import { UserContext } from '../../../../stores/UserContext';
import Button from '../../../../components/Button';
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTrainerInfo from '../../../../services/user/getTrainerInfo';

const Profile = ({ navigation }) => {
    const { userData } = useContext(UserContext);

    //user info - weight goal - calories goal
    const [trainerInfo, setTrainerInfo] = useState({});
    const { response } = useTrainerInfo();

    useLayoutEffect(() => {
        if (response !== null) {
            setTrainerInfo(response);
        }
    }, [response]);

    const logout = () => {
        AsyncStorage.removeItem('token');
        navigation.navigate('SignIn')
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={logout}>
                    <AntDesign name="logout" size={30} color={colors.purple} style={{ marginRight: '5%', marginBottom: '10%', alignSelf: 'flex-end' }} />
                </TouchableOpacity>
                <View style={styles.profContainer}>
                    <View>
                        {userData.image ? (
                            <Image source={{ uri: userData.image }} style={styles.profileImg} />
                        ) : (
                            <Image source={require('../../../../../assets/images/profile.jpg')} style={styles.profileImg} />
                        )

                        }

                    </View>
                </View>

                <View style={style.inputContainer}>
                    <Text style={styles.name}>{userData.name}</Text>
                </View>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {
                        userData.phone_num ? (
                            <View style={styles.valuesContainer}>
                                <ProfileBox icon={"phone"} title={"Phone Number"} description={userData.phone_num} />
                            </View>
                        ) : <></>
                    }

                    {
                        userData.email ? (
                            <View style={styles.valuesContainer}>
                                <ProfileBox icon={"email"} title={"Email"} description={userData.email} />
                            </View>

                        ) : <></>
                    }

                    <View style={styles.valuesContainer}>
                        <View style={styles.row}>
                            <FontAwesome5
                                name="university"
                                size={18}
                                color={colors.purple} />
                            <Text style={styles.text}>Education</Text>
                        </View>
                        <Text style={styles.desc}>{trainerInfo.education}</Text>
                    </View>

                    <View style={styles.valuesContainer}>
                        <View style={styles.row}>
                            <MaterialIcons
                                name="work"
                                size={20}
                                color={colors.purple} />
                            <Text style={styles.text}>Experience</Text>
                        </View>
                        <Text style={styles.desc}>{trainerInfo.experience}</Text>
                    </View>

                    <View style={styles.valuesContainer}>
                        <View style={styles.row}>
                            <FontAwesome5
                                name="hourglass"
                                size={20}
                                color={colors.purple} />
                            <Text style={styles.text}>Working Hours</Text>
                        </View>
                        <Text style={styles.desc}>{trainerInfo.working_hours}</Text>
                    </View>
                    <View style={{ paddingBottom: '10%' }}>
                        <Button text={"Edit Profile"} onPress={() => { navigation.navigate('EditProfile') }} />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Profile