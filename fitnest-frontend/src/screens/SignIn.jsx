import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import { style } from '../styles/style';
import colors from '../constants/colors';

const SignIn = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.p2}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <View style={styles.bar}>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>Sign In</Text>
          </View>
          <View style={{ paddingTop: 50 }}>
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
            <Text style={styles.text}>Not a member?</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SignUp')
              }>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[style.signup, { alignSelf: 'center', marginTop: 50 }]}>
            <Text style={style.loginText}>Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>

  )
}

export default SignIn

const styles = StyleSheet.create({

})