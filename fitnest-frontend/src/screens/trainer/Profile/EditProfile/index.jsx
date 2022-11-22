import { Image, SafeAreaView, Text, View, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import colors from '../../../../constants/colors';
import { style } from '../../../../styles/style';
import { UserContext } from '../../../../stores/UserContext';
import { BASE_URL } from '../../../../variables/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './style';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import updateProfile from '../../../../services/user/updateProfile';
const EditProfile = ({ navigation }) => {
    const { userData, setUserData } = useContext(UserContext);
    const [name, setName] = useState('');
    const [image, setImage] = useState(userData.image);
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const [error, setError] = useState('');
    //user info
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [workingHours, setWorkingHours] = useState('');
    const [load, setloading] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);
    const [disable, setDisable] = useState(false);
    const [isPickerVisible, showPickerVisibility] = useState(false);
    const displayError = (message) => {
        setError(message)
    }

    const uploadImage = async () => {
        let res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })
        if (!res.cancelled) {

            setImage(res.uri);
        }


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
        setUserData(data)
    }

    const showPicker = () => {
        showPickerVisibility(true);
    };

    const hideHourPicker = () => {
        showPickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setWorkingHours(date.getHours())
        hideHourPicker();
    };

    const editMoreInfo = async () => {
        const token = await AsyncStorage.getItem('token');
        try {
            await axios({
                headers: { 'Authorization': 'Bearer ' + token },
                method: 'POST',
                url: `${BASE_URL}/update_trainer_info`,

                data: {
                    education: experience,
                    experience: education,
                    working_hours: workingHours
                }
            })
            Alert.alert('Edited Successfully');
        } catch (err) {
            console.log(err.response.data)
            displayError('Please enter all fields')
            return { success: false, error: err }
        }

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
                        <Image source={{ uri: image }} style={styles.profileImg} />
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
                                    <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20 }} onPress={() => setModalVisibility(false)}>
                                        <FontAwesome name={"close"} size={30} color={colors.purple} />
                                    </TouchableOpacity>
                                    <Text style={[style.secondaryText, { fontWeight: '500' }]}>Edit More Info</Text>
                                    <View style={style.inputContainer}>
                                        <Text style={style.inputLabel}>Experience</Text>
                                        <TextInput
                                            style={style.input}
                                            onChangeText={weightGoal => setExperience(weightGoal)} />
                                    </View>
                                    <View style={style.inputContainer}>
                                        <Text style={style.inputLabel}>Education</Text>
                                        <TextInput
                                            style={style.input}
                                            onChangeText={caloriesGoal => setEducation(caloriesGoal)} />
                                    </View>
                                    <View style={style.inputContainer}>
                                        <Text style={style.inputLabel}>Working Hours</Text>
                                        <TouchableOpacity onPress={showPicker}>
                                            <Text style={style.secondaryText}>Open</Text>
                                        </TouchableOpacity>
                                        <DateTimePickerModal
                                            isVisible={isPickerVisible}
                                            mode="time"
                                            onConfirm={handleConfirm}
                                            onCancel={hideHourPicker}
                                        />
                                    </View>

                                    {
                                        error ? (
                                            <Text>{error}</Text>
                                        ) : (
                                            <></>
                                        )
                                    }
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

