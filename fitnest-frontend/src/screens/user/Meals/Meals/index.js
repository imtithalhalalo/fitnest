import { SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../../constants/colors';
import Header from '../../../../components/Header';
import Search from '../../../../components/Search';
import ButtonToggleGroup from 'react-native-button-toggle-group';
import { style } from '../../../../styles/style';

const Meals = () => {
    
    const [category, setCategory] = useState('Breakfast');

    return (
        <SafeAreaView style={style.mainContainer}>
            <Header text={"My Suggested Meals"} />
            <Search />

            <View style={{ width: '98%', alignSelf: 'center', marginTop: '5%', marginBottom: '3%' }}>
                <ButtonToggleGroup
                    highlightBackgroundColor={colors.purple}
                    style={{ borderRadius: 10, backgroundColor: colors.white }}
                    highlightTextColor={'white'}
                    inactiveTextColor={colors.black}
                    values={['Breakfast', 'Lunch', 'Dinner']}
                    value={category}
                    onSelect={val => setCategory(val)}
                    textStyle={{ fontSize: 18, textAlign: 'center' }}
                />
            </View>

        </SafeAreaView>
    )
}

export default Meals
