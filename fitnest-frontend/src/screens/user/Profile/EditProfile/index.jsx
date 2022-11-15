import { Image, SafeAreaView, Text, View, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import colors from '../../../../constants/colors';
import { style } from '../../../../styles/style';
import styles from './styles';
import updateProfile from '../../../../services/user/updateProfile';
import { UserContext } from '../../../../stores/UserContext';
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

                <Button text={"Save"} onPress={handleUpdateProfile} style={{ marginTop: 0 }} />

            </SafeAreaView>
        </>
    )
}

export default EditProfile

