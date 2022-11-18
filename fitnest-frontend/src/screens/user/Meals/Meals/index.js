import { FlatList, SafeAreaView, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import colors from '../../../../constants/colors';
import Header from '../../../../components/Header';
import Search from '../../../../components/Search';
import ButtonToggleGroup from 'react-native-button-toggle-group';
import EmptyState from '../../../../components/EmptyState';
import MealCard from '../../../../components/MealCard';
import Loader from '../../../../components/Loader';
import { styles } from '../../../../components/MealCard/style';
import { style } from '../../../../styles/style';
import getMeals from '../../../../services/user/getMeals';

const Meals = () => {

    const [category, setCategory] = useState('Breakfast');
    const [search, setSearch] = useState('');
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [meals, setMeals] = useState([]);
    const [loading, isLoading] = useState(true);

    const getData = async () => {
        const result = await getMeals(category);
        console.log(result.data)
        if (result.success) {
            isLoading(false)
            setMeals(result.data);
            setFilteredMeals(result.data)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    
    const handleSearch = (keyword) => {
        if (keyword) {
            const filteredData = meals.filter((item) =>
                item.title.toLowerCase().includes(keyword.toLowerCase())
            );
            setFilteredMeals(filteredData);
            setSearch(keyword)
        } else {
            setFilteredMeals(meals)
            setSearch(keyword)
        }
    }

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
            <Search onChangeText={(keyword) => { handleSearch(keyword) }}
                onClear={(keyword) => handleSearch('')} value={search} />

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

            {
                loading ?
                    <Loader />
                    :
                    filteredMeals.length == 0 ? (
                        <EmptyState image={require("../../../../../assets/images/healthyfood.png")} description={"This section will contain available healthy meals "} title={"No meals"} />
                    ) :
                        <FlatList
                            data={filteredMeals}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            style={styles.grid}
                            contentContainerStyle={{ paddingBottom: 50 }}
                            ListFooterComponent={<SafeAreaView />}
                        />
            }

        </SafeAreaView>
    )
}

export default Meals
