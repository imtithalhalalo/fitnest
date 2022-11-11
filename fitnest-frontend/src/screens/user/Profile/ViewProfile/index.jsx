import { Text, SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from "react-native-vector-icons";
import colors from '../../../../constants/colors';
import ProfileBox from '../../../../components/ProfileBox';
import { style } from '../../../../styles/style';
import styles from './style';
import Button from '../../../../components/Button';

const Profile = () => {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.profContainer}>
                    <View>
                        <Image source={require('../../../../../assets/images/profile.jpg')} style={styles.profileImg} />
                    </View>
                </View>

                <View style={style.inputContainer}>
                    <Text style={styles.name}>{"Imtithal Halalo"}</Text>
                </View>
                {
                    userData.phone_num ? (
                        <ProfileBox icon={"phone"} title={"Phone Number"} description={"+961 987653"} />
                    ) : <></>
                }

                <ProfileBox icon={"email"} title={"Email"} description={"imtithal@gmail.com"} />


                <View>
                    <View style={styles.row}>
                        <FontAwesome5
                            name="weight-hanging"
                            size={18}
                            color={colors.purple} />
                        <Text style={styles.text}>Weight Goal</Text>
                    </View>
                    <Text style={styles.desc}>45 g </Text>
                </View>

                <View>
                    <View style={styles.row}>
                        <FontAwesome5
                            name="fire"
                            size={20}
                            color={colors.purple} />
                        <Text style={styles.text}>Calories Goal</Text>
                    </View>
                    <Text style={styles.desc}>5666 kcal</Text>
                </View>

                <Button text={"Edit Profile"} />
            </SafeAreaView>
        </>
    )
}

export default Profile