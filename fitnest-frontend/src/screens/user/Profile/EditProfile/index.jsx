import { SafeAreaView, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import colors from '../../../../constants/colors';
import { style } from '../../../../styles/style';
import styles from './styles';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

const EditProfile = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);

    return (
        <>
            <SafeAreaView style={style.mainContainer}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback onPress={() => { navigation.pop() }}>
                        <EvilIcons name="arrow-left" size={50} color={colors.purple} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.imgContainer}>
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

                <Button text={"Save"} style={{ marginTop: 0 }} />

            </SafeAreaView>
        </>
    )
}

export default EditProfile

