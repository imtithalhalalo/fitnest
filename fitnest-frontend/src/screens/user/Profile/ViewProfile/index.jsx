import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useLayoutEffect } from 'react'
import { FontAwesome5 } from "react-native-vector-icons";
import colors from '../../../../constants/colors';
import ProfileBox from '../../../../components/ProfileBox';
import { style } from '../../../../styles/style';
import styles from './style';
import { UserContext } from '../../../../stores/UserContext';
import useUserInfo from '../../../../services/user/getUserInfo';
import useAxios from '../../../../services/user/getProfile';
import Button from '../../../../components/Button';
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { address } from '../../../../variables/global';
const Profile = ({ navigation }) => {
    const { userData } = useContext(UserContext);

    //user info - weight goal - calories goal
    const [userInfo, setUserInfo] = useState({});

    const { response } = useUserInfo();

    useLayoutEffect(() => {
        if (response !== null) {
            setUserInfo(response);
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
                            <Image source={{ uri: `${address}/${userData.image}` }} style={styles.profileImg} />
                        ) : (
                            <Image source={require('../../../../../assets/images/profile.jpg')} style={styles.profileImg} />
                        )

                        }

                    </View>
                </View>

                <View style={style.inputContainer}>
                    <Text style={styles.name}>{userData.name}</Text>
                </View>
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
                            name="weight-hanging"
                            size={18}
                            color={colors.purple} />
                        <Text style={styles.text}>Weight Goal</Text>
                    </View>
                    <Text style={styles.desc}>{userInfo.weight_goal} g </Text>
                </View>

                <View style={styles.valuesContainer}>
                    <View style={styles.row}>
                        <FontAwesome5
                            name="fire"
                            size={20}
                            color={colors.purple} />
                        <Text style={styles.text}>Calories Goal</Text>
                    </View>
                    <Text style={styles.desc}>{userInfo.calories_goal} kcal</Text>
                </View>

                <Button text={"Edit Profile"} onPress={() => { navigation.navigate('EditProfile') }} />
            </SafeAreaView>
        </>
    )
}

export default Profile