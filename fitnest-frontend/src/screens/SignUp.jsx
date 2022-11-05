import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import { style } from '../styles/style';
import colors from '../constants/colors';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.p2}>
                    <View style={styles.bar}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>Sign Up</Text>
                    </View>
                    <View style={{ paddingTop: 50 }}>
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
                            <Text style={style.inputLabel}>Password</Text>
                            <TextInput
                                style={style.input}
                                secureTextEntry={true}
                                onChangeText={password => setPassword(password)} />
                        </View>

                    </View>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <Text style={styles.text}>Already have account?</Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('SignIn')
                            }>
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[style.signup, { alignSelf: 'center', marginTop: '10%' }]}>
                        <Text style={style.loginText}>Sign Up</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default SignUp

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
        fontWeight: '500',
        marginBottom: 20
    },
    btnText: {
        fontSize: 14, color: colors.purple,
        fontWeight: '500',
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