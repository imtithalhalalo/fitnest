import { Image, StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import colors from '../constants/colors'
import { style } from '../styles/style'
import { EvilIcons } from '@expo/vector-icons';
const EditProfile = ({ navigation }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState("");
    const [phone_num, setPhoneNum] = useState('');
    return (
        <>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => { navigation.pop() }}>
                    <EvilIcons name="arrow-left" size={50} color={colors.purple} />
                </TouchableWithoutFeedback>
            </View>

            <SafeAreaView style={styles.container}>

                <View style={styles.profContainer}>

                    <View>
                        <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImg} />
                    </View>
                    <View style={style.bar}>
                        <Text style={styles.choose}>
                            Change
                        </Text>
                        <Text style={styles.delete}>
                            Delete
                        </Text>
                    </View>
                </View>
                <View style={style.inputContainer}>
                    <Text style={style.inputLabel}>Name</Text>
                    <TextInput
                        style={style.input}
                        onChangeText={name => setName(name)} />
                </View>

                <View style={style.inputContainer}>
                    <Text style={style.inputLabel}>Email</Text>
                    <TextInput
                        style={style.input}
                        onChangeText={email => setEmail(email)} />
                </View>

                <View style={style.inputContainer}>
                    <Text style={style.inputLabel}>Phone Number</Text>
                    <TextInput
                        style={style.input}
                        onChangeText={phone_num => setPhoneNum(phone_num)} />
                </View>

                <TouchableOpacity style={[style.signup, { alignSelf: 'center', marginTop: 100 }]}>
                    <Text style={style.loginText}>Save</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        padding: 30
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
    header: {
        paddingTop: 50,
        paddingLeft: 30
    }
})