import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { style } from '../../styles/style'
import colors from '../../constants/colors'
import { FontAwesome } from "@expo/vector-icons";
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';

const AddPlan = () => {
    const [title, setTitle] = useState('')
    const [num_weeks, setWeeksNum] = useState('');
    const [image, setImage] = useState('');
    return (
        <SafeAreaView style={style.mainContainer}>
            <ScrollView style={style.p2}>

                <Header text={"Add Plan"} back="back" />
                <View style={{ paddingTop: 150 }}>

                    <Input label={"Workout Name"} handleChange={title => setTitle(title)} />
                    <Input label={"Duration in Weeks"} handleChange={num_weeks => setWeeksNum(num_weeks)} keyboardType={'number-pad'} />

                    <View style={styles.btnBox}>
                        <FontAwesome name="image" size={20} color={colors.black} style={{ paddingRight: 20 }} />
                        <Text style={styles.uploadImgTxt} onPress={uploadImage} >Upload Image</Text>
                    </View>
                </View>

                <Button text={"Add Plan"} />
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