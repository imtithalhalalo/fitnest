import { FlatList, SafeAreaView, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import colors from '../../../../constants/colors';
import Header from '../../../../components/Header';
import Search from '../../../../components/Search';
import ButtonToggleGroup from 'react-native-button-toggle-group';
import EmptyState from '../../../../components/EmptyState';
import MealCard from '../../../../components/MealCard';
import useAxios from '../../../../services/user/getMeals';
import Loader from '../../../../components/Loader';
import { styles } from '../../../../components/MealCard/style';
import { style } from '../../../../styles/style';

const Meals = () => {

    const [meals, setMeals] = useState([]);
    const [category, setCategory] = useState('Breakfast');
    const { response, loading, error } = useAxios({ category });

    useEffect(() => {
        if (response !== null) {
            setMeals(response);
        }
    }, []);

    const renderItem = ({ item }) => (
        <MealCard
            title={item.title}
            image={item.image}
            id={item.id}
        />
    )
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


            <FlatList
                data={meals}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                style={styles.grid}
                contentContainerStyle={{ paddingBottom: 50 }}
                ListFooterComponent={<SafeAreaView />}
            />

        </SafeAreaView>
    )
}

export default Meals
