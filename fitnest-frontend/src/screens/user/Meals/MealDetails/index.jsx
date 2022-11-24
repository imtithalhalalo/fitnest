import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { styles } from './style';
import Header from '../../../../components/Header';
import useGetMeal from '../../../../services/user/getMealById';
import useGetMealIngredients from '../../../../services/user/getMealIngredients';
import IngredientCard from '../../../../components/IngredientCard';
import { style } from '../../../../styles/style';
import saveMeal from '../../../../services/user/saveMeals';
import Button from '../../../../components/Button';
import useGetMealTips from '../../../../services/user/getMealTips';
import { address } from '../../../../variables/global';

const MealDetails = ({ route, navigation }) => {
  const { id, title, image } = route.params;
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [tips, setTips] = useState([]);
  const { response, loading, error } = useGetMeal({ id });
  const { res, load, err } = useGetMealIngredients({ id });
  const { resp, loads, eror } = useGetMealTips({ id });
  useLayoutEffect(() => {
    if (response !== null) {
      setMeal(response);
    }
    if (res !== null) {
      setIngredients(res);
    }
    if (resp !== null) {
      console.log(tips)
      setTips(resp);
    }
  }, [response, res]);

  const handleSave = async () => {
    let data = {
      meal_id: id,
    }
    await saveMeal(data)
  }

  const viewSaved = async () => {
    navigation.navigate('SavedMeals');
  }
  return (
    <SafeAreaView style={style.mainContainer}>
      <TouchableOpacity onPress={viewSaved}>
        <View style={[styles.row, { alignSelf: 'flex-end' }]}>
          <Text style={styles.txt}>Saved Meals</Text>
          <Image source={require('../../../../../assets/images/bookmark.png')} style={{ width: 25, height: 25, alignSelf: 'flex-end', marginRight: '2%' }} />
        </View>
      </TouchableOpacity>
      <Header text={title} back="back" />

      {meal.image ? (
        <Image source={{ uri: `${address}/${image}` }} style={styles.img} resizeMode={'cover'} />
      ) : <></>
      }
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}>Calories</Text>
            <Text style={styles.value}>{meal.calories}  kcal</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Fats</Text>
            <Text style={styles.value}>{meal.fats} g</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Protein</Text>
            <Text style={styles.value}>{meal.protein} g</Text>
          </View>
        </View>
        <View style={styles.dash}></View>

        {
          ingredients.length ?
          <>
           <Text style={styles.title}>Ingredients</Text>
        <View style={styles.ingredientsContainer}>
          
          {
            ingredients.map((i =>
              <IngredientCard
                title={i.ingredient}
                key={i.id}
                green={true} />))
          }
        </View> 
          </>: <></>
        }
        <Button text={"Save"} onPress={handleSave} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default MealDetails
