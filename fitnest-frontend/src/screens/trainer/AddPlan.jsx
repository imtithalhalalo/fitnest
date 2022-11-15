import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { style } from '../../styles/style'
import colors from '../../constants/colors'
import { FontAwesome } from "@expo/vector-icons";
import addProgram from '../../services/trainer/addProgram'
import * as ImagePicker from "expo-image-picker";
import Button from '../../components/Button';
import CustomModal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';

const AddPlan = () => {
    const [title, setTitle] = useState('')
    const [num_weeks, setWeeksNum] = useState('');
    const [image, setImage] = useState('');

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

    const [error, setError] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false);

    const showError = (message) => {
        setError(message)
        setModalVisibility(true)
    }

    const addPlan = async () => {
        if (!title || !num_weeks) {
            showError('All fields are required')
            return
        }
        let data = {
            title: title,
            num_weeks: num_weeks,
            image: image
        }
        console.log(image)
        await addProgram(data)
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            <ScrollView style={style.p2}>

                <Header text={"Add Plan"} back="back" />
                <View style={{ paddingTop: 150 }}>

                    <Input label={"Workout Name"} handleChange={title => setTitle(title)} />
                    <Input label={"Duration in Weeks"} handleChange={num_weeks => setWeeksNum(num_weeks)} keyboardType={'number-pad'} />

                    <View style={styles.btnBox}>
                        <FontAwesome name="image" size={20} color={colors.black} style={{ paddingRight: 20 }} onPress={uploadImage} />
                        <Text style={styles.uploadImgTxt} onPress={uploadImage} >Upload Image</Text>
                    </View>
                    {
                        modalVisibility ?
                            <CustomModal 
                                onRequestClose={() => {setModalVisibility(!modalVisibility);}} 
                                visible={modalVisibility} 
                                error={error} 
                                onPress={() => setModalVisibility(!modalVisibility)} 
                                text={"Close"} />
                            : <></>
                    }
                </View>

                <Button text={"Add Plan"} onPress={addPlan} />
            </ScrollView>


        </SafeAreaView>
    )
}

export default AddPlan

const styles = StyleSheet.create({
    btnBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20
    },
    uploadImgTxt: {
        fontSize: 14,
        color: colors.darkGrey,
    },
})