import { Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { style } from '../styles/style';
import colors from '../constants/colors';
import Button from '../components/Button';

const Splash = ({ navigation }) => {
    return (
        <SafeAreaView style={style.mainContainer}>
            <Image source={require('../../assets/images/start.png')} style={styles.logo} resizeMode={'contain'} />
            <Button text={"Sign Up"} onPress={() =>
                navigation.push('SignUp')
            } />

            <TouchableOpacity
                style={style.login}
                onPress={() =>
                    navigation.push('SignIn')
                }>
                <Text style={style.loginText}>Log In</Text>
            </TouchableOpacity>
            
        </SafeAreaView>

    )
}
export default Splash
const styles = StyleSheet.create({
    logo: {
        width: '80%',
        alignSelf: 'center'
    },
})