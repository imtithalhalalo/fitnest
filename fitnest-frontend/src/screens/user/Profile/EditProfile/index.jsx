import { Image, SafeAreaView, Text, View, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Alert, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import colors from '../../../../constants/colors';
import { style } from '../../../../styles/style';
import styles from './styles';
import updateProfile from '../../../../services/user/updateProfile';
import * as ImagePicker from "expo-image-picker";
import { UserContext } from '../../../../stores/UserContext';
import axios from 'axios';
import { BASE_URL } from '../../../../variables/global.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { FontAwesome } from "@expo/vector-icons";

const EditProfile = ({ navigation }) => {
    const { userData, setUserData } = useContext(UserContext);
    const [name, setName] = useState('');
    const [image, setImage] = useState(userData.image);
    const [base64, setBase64] = useState('');
    const [ext, setExt] = useState('');
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

    const uploadImage = async () => {
        let res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
            aspect: [1, 1],
            quality: 1,
        })
        if (!res.cancelled) {
            setImage(res.uri);
        }
        setBase64(res.base64);
        console.log(image)

    }
    useEffect(()=>{ image? setExt(image.split('.').pop()):null},[image])

    const handleUpdateProfile = async () => {
        if (!name || !email || !phoneNum) {
            displayError('All fields are required')
            return
        }
        let data = {
            name: name,
            email: email,
            phone_num: phoneNum,
            image: base64,
            ext: ext
        }
        try {
            const res = await updateProfile(data)
            setUserData(res.data)
        }catch(error) {
            console.log(error)
        }
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
            Alert.alert('Edited Successfully');
        } catch (err) {
            console.log(err.response.data)
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
                <ScrollView>
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
                </ScrollView>
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
                                    <Input label={"Weight Goal"} handleChange={weightGoal => setWeightGoal(weightGoal)}/>
                                    <Input label={"Calories Goal"} handleChange={caloriesGoal => setCaloriesGoal(caloriesGoal)}/>
                                    <Button text={"Edit"} onPress={editMoreInfo}/>
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

