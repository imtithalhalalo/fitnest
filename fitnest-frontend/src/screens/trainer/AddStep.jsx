import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { style } from '../../styles/style'
import { FontAwesome } from "@expo/vector-icons";
import colors from '../../constants/colors';
import * as ImagePicker from "expo-image-picker";
import addExercise from '../../services/trainer/addExercise';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
import CustomModal from '../../components/Modal';


const AddStep = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState(0);
    const [error, setError] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false);


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

    const handle = async () => {
        if (!title || !description || !time || !image) {
            displayError('All fields are required')
            return
        }
        let data = {
            title: title,
            description: description,
            image: image,
            time: time
        }
        addExercise(data)

    }
    return (
        <SafeAreaView style={style.mainContainer}>

            <Header text={"Add Step"} back="back"/>

            <View style={{ paddingTop: 50 }}>
                <Input label={"Step Title"} onChangeText={title => setTitle(title)}/>
                <Input label={"Step Time"} keyboardType='number-pad' onChangeText={time => setTime(time)}/>

                <View style={[style.inputContainer]}>
                    <Text style={style.inputLabel}>Step Description</Text>
                    <TextInput
                        multiline
                        style={[style.input, { height: 150 }]}
                        maxLength={40}
                        onChangeText={description => setDescription(description)} />
                </View>
                <View style={styles.btnBox}>
                    <FontAwesome name="image" size={20} color={colors.black} style={{ paddingRight: 20 }} />
                    <Text style={styles.uploadImgTxt} onPress={uploadImage}>Upload Image</Text>
                </View>
            </View>

            <Button text={"Add Step"} onPress={handle} />
        </SafeAreaView>
    )
}

export default AddStep

const styles = StyleSheet.create({
    uploadImgTxt: {
        fontSize: 14,
        color: colors.darkGrey,
    },
    btnBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})