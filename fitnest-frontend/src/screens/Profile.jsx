import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from '../styles/style'
import colors from '../constants/colors'
import ProfileBox from '../components/ProfileBox'
import { FontAwesome, Feather } from "react-native-vector-icons";

const Profile = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.profContainer}>
                    <View>
                        <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImg} />
                    </View>
                </View>
                <View style={style.inputContainer}>
                    <Text style={styles.name}>Imtithal Halalo</Text>
                </View>

                <ProfileBox icon={"phone"} title={"Phone Number"} description={"10:00 AM - 9:00 PM"} />
                <ProfileBox icon={"email"} title={"Email"} description={"10:00 AM - 9:00 PM"} />
                <View>
                    <View style={styles.row}>
                        <FontAwesome
                            name="university"
                            size={20}
                            color={colors.purple} />
                        <Text style={styles.text}>Education</Text>
                    </View>
                    <Text style={styles.desc}>Lebanese Internation University</Text>
                </View>
                <ProfileBox icon={"work"} title={"Experience"} description={"N/A"} />
                <View>
                    <View style={styles.row}>
                        <Feather
                            name="clock"
                            size={16}
                            color={colors.purple} />
                        <Text style={styles.text}>Working Hours</Text>
                    </View>
                    <Text style={styles.desc}>10:00 AM - 9:00 PM</Text>
                </View>
                <TouchableOpacity style={style.primaryBtn} onPress={() => { navigation.navigate('EditProfile') }}>
                    <Text style={style.primaryTextBtn}>Edit Profile</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    desc: {
        fontSize: 16,
        color: colors.darkGrey,
        paddingTop: '3%',
        paddingBottom: '3%',
        fontWeight: '400'
    },
    text: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '500',
        paddingLeft: '4%'
    },
    title: {
        fontSize: 22,
        color: colors.black,
        fontWeight: '500'
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    container: {
        padding: '10%',
        paddingTop: '30%',
        backgroundColor: colors.lighterPurple,
        flex: 1,
    },
    profileImg: {
        width: 120,
        height: 120,
        borderRadius: 400 / 2,
    },
    profContainer: {
        display: "flex",
        alignSelf: "center",
        marginBottom: 20,
    },
})