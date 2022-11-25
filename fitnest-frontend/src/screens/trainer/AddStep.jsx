import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
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
    const [base64, setBase64] = useState('');
    const [ext, setExt] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState(0);
    const [error, setError] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false);
    

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
        setBase64(res.base64)
    }

    useEffect(()=>{ image? setExt(image.split('.').pop()):null},[image])
    const displayError = (message) => {
        setError(message)
        setModalVisibility(true)
    } 

    const handle = async () => {
        console.log(title, description, time, image)
        if (!title || !description || !time || !image) {
            displayError('All fields are required')
            return
        }
        let data = {
            title: title,
            description: description,
            image: base64,
            ext: ext,
            time: time
        }
        
        await addExercise(data)
    }
    return (
        <SafeAreaView style={style.mainContainer}>

            <Header text={"Add Step"} back="back"/>

            <View style={{ paddingTop: 50 }}>
                <Input label={"Step Title"} handleChange={title => setTitle(title)}/>
                <Input label={"Step Time"} keyboardType='number-pad' handleChange={time => setTime(time)}/>

                <View style={[style.inputContainer]}>
                    <Text style={style.inputLabel}>Step Description</Text>
                    <TextInput
                        multiline
                        style={[style.input, { height: 150 }]}
                        onChangeText={description => setDescription(description)} />
                </View>
                <View style={styles.btnBox}>
                    <FontAwesome name="image" size={20} color={colors.black} style={{ paddingRight: 20 }} />
                    <Text style={styles.uploadImgTxt} onPress={uploadImage}>Upload Image</Text>
                </View>
                {
                    modalVisibility ? (
                        <CustomModal
                            onRequestClose={() => { setModalVisibility(!modalVisibility); }}
                            visible={modalVisibility}
                            error={error}
                            onPress={() => setModalVisibility(!modalVisibility)}
                            text={"Close"} />
                    ): <></>
                }
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