import { SafeAreaView, StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from '../../../styles/style'
import colors from '../../../constants/colors'
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import addProgram from '../../../services/trainer/addProgram'
import * as ImagePicker from "expo-image-picker";
import Button from '../../../components/Button';
import CustomModal from '../../../components/Modal';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import useGetUsers from '../../../services/trainer/getUsers';
import styles from './style';
import { Dropdown } from 'react-native-element-dropdown';
import addPersonalPlan from '../../../services/trainer/addPersonalPlan';
import getPersonalPlans from '../../../services/user/getPersonalPlans';

const AddPlan = () => {
    const [title, setTitle] = useState('')
    const [num_weeks, setWeeksNum] = useState('');
    const [image, setImage] = useState('');
    const { response, loading } = useGetUsers();
    const [personalPlanModalVisibility, setPersonalPlanModalVisibility] = useState(false);
    const [user, setUser] = useState('');
    const [ base64, setBase64 ] = useState('');
    const [ ext, setExt ] = useState('');


    return (
        <SafeAreaView style={style.mainContainer}>
            <ScrollView style={style.p2}>

                <Header text={"Add Plan"} back="back" />
                <View style={{ paddingTop: 150 }}>

                    <Input label={"Workout Name"} handleChange={title => setTitle(title)} />
                    <Input label={"Duration in Weeks"} handleChange={num_weeks => setWeeksNum(num_weeks)} keyboardType={'number-pad'} />

                    <View style={styles.btnBox}>
                        <FontAwesome name="image" size={20} color={colors.black} style={{ paddingRight: 10 }} onPress={uploadImage} />
                        <Text style={styles.uploadImgTxt} onPress={uploadImage} >Upload Image</Text>
                    </View>
                    {
                        modalVisibility ?
                            <CustomModal
                                onRequestClose={() => { setModalVisibility(!modalVisibility) }}
                                visible={modalVisibility}
                                error={error}
                                onPress={() => setModalVisibility(!modalVisibility)}
                                text={"Close"} />
                            : <></>
                    }
                </View>
                {
                    personalPlanModalVisibility ?
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={personalPlanModalVisibility}
                            onRequestClose={() => {
                                setPersonalPlanModalVisibility(!personalPlanModalVisibility);
                            }}
                        >
                            <View style={styles.centered}>
                                <View style={styles.modal}>
                                    <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20 }} onPress={() => setPersonalPlanModalVisibility(false)}>
                                        <FontAwesome name={"close"} size={30} color={colors.purple} />
                                    </TouchableOpacity>
                                    <Text style={[style.secondaryText, { fontWeight: '500' }]}>Choose user</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        data={response}
                                        placeholder="Choose User"
                                        labelField="name"
                                        valueField="id"
                                        value={user}
                                        onChange={item => {
                                            setUser(item.id);
                                            console.log(user);
                                        }}
                                    />
                                    <Button text={"Add"} onPress={() => setPersonalPlanModalVisibility(false)} />
                                </View>
                            </View>
                        </Modal> : <></>
                }
                <Button text={"Personal Plan"} onPress={() => { setPersonalPlanModalVisibility(true) }} secondary={true} />
                <Button text={"Add Plan"} onPress={addPlan} />


            </ScrollView>


        </SafeAreaView>
    )
}

export default AddPlan