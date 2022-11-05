import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from '../styles/style'
import colors from '../constants/colors'

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

                <View style={style.inputContainer}>
                    <Text style={style.inputLabel}>Email</Text>
                    <Text style={styles.desc}>imtithal@gmail.com</Text>
                </View>

                <View style={style.inputContainer}>
                    <Text style={style.inputLabel}>Phone Number</Text>
                    <Text style={styles.desc}> + 961 76 016 451</Text>
                </View>

                <TouchableOpacity style={[style.signup, { alignSelf: 'center', marginTop: 100 }]} onPress={() => { navigation.navigate('EditProfile') }}>
                    <Text style={style.loginText}>Edit Profile</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({
    desc: {
        fontSize: 18,
        fontWeight: '400',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    container: {
        padding: 40,
        paddingTop: 120
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
    choose: {
        textAlign: "center",
        paddingTop: 10,
        color: colors.purple,
        fontWeight: "700"
    },
    delete: {
        textAlign: "center",
        paddingTop: 10,
        color: colors.green,
        fontWeight: "700"
    },
})