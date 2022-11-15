import { FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import useSavedMeals from '../../../../services/user/getSavedMeals';
import SavedMealCard from '../../../../components/SavedMealCard';
import EmptyState from '../../../../components/EmptyState';
import Header from '../../../../components/Header';
import { style } from '../../../../styles/style';
import Loader from '../../../../components/Loader';

const SavedMeals = () => {

    const { response, loading, error } = useSavedMeals();

    const renderItem = ({ item }) => (
        <SavedMealCard
            title={item.title}
            image={item.image}
            id={item.id}
        />
    )
    return (
        <SafeAreaView style={style.mainContainer}>
            <Header text={"My Saved Meals"} back="back" />

            {
                loading ? (
                    <Loader />
                ) :
                    response.length == 0 ? (
                        <EmptyState image={require("../../../../../assets/images/healthyfood.png")} description={"This section will contain your saved healthy meals "} title={"No saved meals"} />
                    ) :
                        <FlatList
                            data={response}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{ paddingBottom: 50 }}
                            ListFooterComponent={<SafeAreaView />}
                        />
            }

        </SafeAreaView>
    )
}

export default SavedMeals