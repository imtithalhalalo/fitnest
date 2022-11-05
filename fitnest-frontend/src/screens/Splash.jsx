import { Text, Image, TouchableOpacity,SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { style } from '../styles/style';
import colors from '../constants/colors';

const Splash = ({ navigation }) => {
    return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/images/start.png')} style={style.logo} resizeMode={'contain'} />
                <TouchableOpacity
                    style={style.login}
                    onPress={() =>
                        navigation.push('SignIn')
                    }>
                    <Text style={style.loginText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={style.signup}
                    onPress={() =>
                        navigation.push('SignUp')
                    }>
                    <Text style={style.signupText}>Sign Up</Text>
                </TouchableOpacity>
            </SafeAreaView>

    )
}
export default Splash
const styles = StyleSheet.create({
container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    padding: '10%'
  },
})