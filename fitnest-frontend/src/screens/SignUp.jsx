import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import { style } from '../styles/style';
import colors from '../constants/colors';
import SignUp from '../services/signup';
import Input from '../components/Input';
import Button from '../components/Button';
import CustomModal from '../components/Modal';
const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [error, setError] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false);

    const displayError = (message) => {
        setError(message)
        setModalVisibility(true)
    }
    const handleSignUp = async () => {
        if (!name || !email || !password) {
            displayError('All fields are required')
            return
        }
        if (password.length < 6) {
            displayError('Password must be at least 6 characters')
            return
        }
        if (!email.includes('@')) {
            displayError('Please enter valid email! ')
            return
        }
        let data = {
            name: name,
            email: email,
            password: password
        }

        await SignUp(data);
        navigation.navigate('Steps');
    }

    return (
        <>
            <SafeAreaView style={style.mainContainer}>
                <ScrollView style={styles.p2}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                    <View style={styles.bar}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>Sign Up</Text>
                    </View>

                    <Input label={"Name"} handleChange={name => setName(name)} />
                    <Input label={"Email"} handleChange={email => setEmail(email)} />
                    <Input label={"Password"} handleChange={password => setPassword(password)} secureTextEntry={true} />

                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <Text style={styles.text}>Already have account?</Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('SignIn')
                            }>
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        modalVisibility ? (
                            <CustomModal
                                onRequestClose={() => { setModalVisibility(!modalVisibility); }}
                                visible={modalVisibility}
                                error={error}
                                onPress={() => setModalVisibility(!modalVisibility)}
                                text={"Close"} />
                        ) : <></>
                    }
                    <View style={{ marginTop: 40 }}>

                    </View>
                    <Button text={"Sign Up"} onPress={handleSignUp} />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        padding: 30
    },
    bar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    p2: {
        paddingTop: 40,
    },
    text: {
        fontSize: 14,
        color: colors.black,
        fontWeight: '400',
        marginBottom: 20
    },
    btnText: {
        fontSize: 14, color: colors.purple,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 20
    },
    logo: {
        width: 120,
        height: 140,
        alignSelf: 'center',
        marginTop: 20
    }
})