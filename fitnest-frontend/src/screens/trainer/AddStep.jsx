import { Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { style } from '../../styles/style'
import { FontAwesome } from "@expo/vector-icons";
import colors from '../../constants/colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';


const AddStep = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState(0);
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
                    <Text style={styles.uploadImgTxt} >Upload Image</Text>
                </View>
            </View>

            <Button text={"Add Step"}  />
        </SafeAreaView>
    )
}

export default AddStep
