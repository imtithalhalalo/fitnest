import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header';
import { style } from '../../../../styles/style';

const SavedMeals = () => {

    return (
        <SafeAreaView style={style.mainContainer}>
            <Header text={"My Saved Meals"} back="back" />

        </SafeAreaView>
    )
}

export default SavedMeals