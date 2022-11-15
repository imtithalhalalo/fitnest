import { Image, SafeAreaView, Text, View, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import colors from '../../../../constants/colors';
import { style } from '../../../../styles/style';
import styles from './styles';
import updateProfile from '../../../../services/user/updateProfile';
import { UserContext } from '../../../../stores/UserContext';
import axios from 'axios';
import { BASE_URL } from '../../../../variables/global.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

const EditProfile = ({ navigation }) => {
    const { userData } = useContext(UserContext);
    const [name, setName] = useState('');
    const [image, setImage] = useState(userData.image);
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const [error, setError] = useState('');
    //user info
    const [weightGoal, setWeightGoal] = useState('');
    const [caloriesGoal, setCaloriesGoal] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);
    const displayError = (message) => {
        setError(message)
    }
    const handleUpdateProfile = async () => {
        if (!name || !email || !phoneNum) {
            displayError('All fields are required')
            return
        }
        let data = {
            name: name,
            email: email,
            phone_num: phoneNum,
            image: image
        }
        updateProfile(data)
    }

    const editMoreInfo = async () => {
        const token = await AsyncStorage.getItem('token');
        try {
            await axios({
                headers: { 'Authorization': 'Bearer ' + token },
                method: 'POST',
                url: `${BASE_URL}/update_info`,

                data: {
                    weight_goal: weightGoal,
                    calories_goal: caloriesGoal
                }
            })
        } catch (err) {
            console.log(err.response.data)
            return { success: false, error: err }
        }


        Alert.alert('Edited Successfully');

        setModalVisibility(!modalVisibility)
    }
    return (
        <>
            <SafeAreaView style={style.mainContainer}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback onPress={() => { navigation.pop() }}>
                        <EvilIcons name="arrow-left" size={50} color={colors.purple} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.imgContainer}>
                    <View>

                        {image ? (
                            <Image source={{ uri: image }} style={styles.profileImg} />

                        ) : (
                            <Image source={require('../../../../../assets/images/profile.jpg')} style={styles.profileImg} />
                        )

                        }
                    </View>
                    <View style={styles.bar}>
                        <TouchableOpacity onPress={uploadImage}>
                            <Text style={styles.choose}>
                                Change Profile Photo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Input label={"Name"} handleChange={name => setName(name)} />
                <Input label={"Email"} handleChange={email => setEmail(email)} />
                <Input label={"Phone Number"} handleChange={phone_num => setPhoneNum(phone_num)} />

                <Button text={"Update More Info"} onPress={() => setModalVisibility(true)} secondary={true} />
                {
                    //edit modal
                    modalVisibility ?
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisibility}
                            onRequestClose={() => {
                                setModalVisibility(!modalVisibility);
                            }}
                        >
                            <View style={styles.centered}>
                                <View style={styles.modal}>

                                    <Text style={[style.secondaryText, {fontWeight: '500'}]}>Edit More Info</Text>
                                    <View style={style.inputContainer}>
                                        <Text style={style.inputLabel}>Weight Goal</Text>
                                        <TextInput
                                            style={style.input}
                                            onChangeText={weightGoal => setWeightGoal(weightGoal)} />
                                    </View>
                                    <View style={style.inputContainer}>
                                        <Text style={style.inputLabel}>Calories Goal</Text>
                                        <TextInput
                                            style={style.input}
                                            onChangeText={caloriesGoal => setCaloriesGoal(caloriesGoal)} />
                                    </View>
                                    <TouchableOpacity
                                        style={[style.primaryBtn]}
                                        onPress={editMoreInfo}
                                    >
                                        <Text style={style.primaryTextBtn}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal> : <></>
                }

                <Button text={"Save"} onPress={handleUpdateProfile} style={{ marginTop: 0 }} />

            </SafeAreaView>
        </>
    )
}

export default EditProfile

