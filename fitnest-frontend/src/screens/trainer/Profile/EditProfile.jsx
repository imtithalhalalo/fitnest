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
                                    <View style={style.inputContainer}>
                                        <Text style={style.inputLabel}>Education</Text>
                                        <TextInput
                                            style={style.input}
                                            onChangeText={education => setEducation(education)} />
                                    </View>
                                    <View style={style.inputContainer}>
                                        <Text style={style.inputLabel}>Experience</Text>
                                        <TextInput
                                            style={[style.input, { height: 100 }]}
                                            onChangeText={experience => setExperience(experience)} />
                                    </View>
                                    <View style={style.inputContainer}>
                                        <Text style={style.inputLabel}>Working Hours</Text>
                                        <TextInput
                                            style={style.input}
                                            onChangeText={working_hours => setWorkingHours(working_hours)} />
                                    </View>
                                    <Pressable
                                        style={[style.primaryBtn]}
                                        onPress={() => setModalVisibility(!modalVisibility)}
                                    >
                                        <Text style={style.primaryTextBtn}>Edit</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal> : <></>
                }
                <TouchableOpacity style={[style.primaryBtn]}>
                    <Text style={style.primaryTextBtn}>Save</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        padding: '10%',
        paddingTop: '20%',
        backgroundColor: colors.lighterPurple,
        flex: 1,
    },
    profileImg: {
        width: 120,
        height: 120,
        borderRadius: 400 / 2,
    },
    profContainer: {
        display: "flex",
        alignSelf: "center",
        marginBottom: 20,
    },
    choose: {
        textAlign: "center",
        paddingTop: 10,
        color: colors.purple,
        fontWeight: "700"
    },
    delete: {
        textAlign: "center",
        paddingTop: 10,
        color: colors.green,
        fontWeight: "700"
    },
})