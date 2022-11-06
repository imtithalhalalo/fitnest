import { Image, StyleSheet, SafeAreaView, Text, View, Modal, Pressable, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import { style } from '../../../styles/style';

const EditProfile = ({ navigation }) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState("");
    const [phone_num, setPhoneNum] = useState('');


    //trainer info
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [working_hours, setWorkingHours] = useState('');

    const [modalVisibility, setModalVisibility] = useState(false);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback onPress={() => { navigation.pop() }}>
                        <EvilIcons name="arrow-left" size={50} color={colors.purple} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.profContainer}>

                    <View>
                        <Image source={require('../../../../assets/images/profile.jpg')} style={styles.profileImg} />
                    </View>
                    <View style={style.bar}>
                        <Text style={styles.choose}>
                            Change
                        </Text>
                        <Text style={styles.delete}>
                            Delete
                        </Text>
                    </View>
                </View>

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
                    <Text style={style.inputLabel}>Phone Number</Text>
                    <TextInput
                        style={style.input}
                        onChangeText={phone_num => setPhoneNum(phone_num)} />
                </View>
                <TouchableOpacity style={[style.secondaryBtn]} onPress={() => setModalVisibility(true)}>
                    <Text style={style.secondaryText}>Update More Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.primaryBtn]}>
                    <Text style={style.primaryTextBtn}>Save</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )
}

export default EditProfile

const styles = StyleSheet.create({
})