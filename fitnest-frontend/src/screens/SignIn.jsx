import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState, useContext } from 'react';
import colors from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../stores/UserContext';
import Button from '../components/Button';
import Input from '../components/Input';
import signin from '../services/signin';
import CustomModal from '../components/Modal';
import { style } from '../styles/style';

const SignIn = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { userData, setUserData } = useContext(UserContext);
  const [modalVisibility, setModalVisibility] = useState(false);

  const displayError = (message) => {
    setError(message)
  }

  const handleLogin = async () => {

    if (!email || !password) {
      displayError('All fields are required')
      setModalVisibility(true);
      return
    }
    let user = {
      email: email,
      password: password
    }
    const result = await signin(user);
    if (result.success) {
      setUserData(result.data['user']);

      await AsyncStorage.setItem('token', result.data.token.original["access_token"])

      let user_type = result.data.user["user_type"];
      console.log(result.data.user["user_type"])

      if (user_type === 'trainer') {
        navigation.reset({
          index: 0,
          routes: [{ name: "BottomTabsTrainer" }]
        })
        navigation.navigate("BottomTabsTrainer")
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "BottomTabs" }]
        })
        navigation.navigate("BottomTabs")
      }
      console.log(await AsyncStorage.getItem('token'))
    }else {
      setError(result.error)
      setModalVisibility(true);
    }

  }
  return (
    <>
      <SafeAreaView style={style.mainContainer}>
        <ScrollView style={styles.p2}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <View style={styles.bar}>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>Sign In</Text>
          </View>
          <View style={{ paddingTop: 50 }}>
            <Input label={"Email"} handleChange={email => setEmail(email)} />
            <Input label={"Password"} handleChange={password => setPassword(password)} secureTextEntry={true} />
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

          <Button text={"Sign In"} onPress={handleLogin} />
        </ScrollView>
      </SafeAreaView>
    </>

  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    padding: '10%',
    paddingTop: '30%',
    backgroundColor: colors.lighterPurple,
    flex: 1,
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